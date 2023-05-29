import userSchema from "../database/models/user.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';
import { sendMail } from "../utils/Email.js";
import fs from 'fs-extra';
import { uploadImage } from "../utils/FileUpload.js";
//Cris altere un poco tu codigo
const register = async (req, res) => {
  //toque esto
  
  let { email, password, dni, phone, address, balance, username } = req.body;
  try {
    let checkEmail = await userSchema.findOne({ email });

    if (checkEmail) {
      return res
        .status(409)
        .json({ error: "El correo electrónico ya está en uso" });
    }
    let cv = "";
    //generacion de cvu
    
    for (let i = 0; i < 22; i++) {
      const digito = Math.floor(Math.random() * 10);
      cv += digito.toString();
    }
    const numero = parseInt(cv, 10);
    //Generacion de alias
    const animal = faker.color.human();
    const color = faker.color.human();
    const company = faker.color.human();

    const ali= `${animal}.${color}.${company}`
    let passwordHash = await bcrypt.hash(password, 8);
    let createUser = new userSchema({
      email,
      password: passwordHash,
      phone,
      dni,
      cvu: numero,
      alias:ali,
      fullname:email.split('@')[0],
      address,
      balance,
      username,
    });

    if (req.files?.urlProfile) {
      const result = await uploadImage(req.files.urlProfile.tempFilePath)
      createUser.urlProfile = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.urlProfile.tempFilePath)
    }
    const dataUser = await createUser.save()

    sendMail({ 
      username:dataUser.email.replace('@gmail.com', ""),
      email:dataUser.email
    },'welcome')

    return res.status(200).json({ dataUser });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userSchema.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(409).json({ error: "Credenciales errores" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(409).json({ error: "El password es incorrecto" });
    }
    const userLogin = await userSchema
      .findOne({ email: user.email })
      .select("-password");

    let token = generateToken(user._id);

    if (!token) {
      return res.status(401).json({ error: "El token no pudo ser generado" });
    }
    return res.status(200).json({ token, userLogin });
  } catch (error) {
    console.log(error);
  }
};
export { register, login };