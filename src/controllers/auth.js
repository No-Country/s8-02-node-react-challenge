import userSchema from "../database/models/user.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';
import { sendMail } from "../utils/Email.js";
//Cris altere un poco tu codigo
const register = async (req, res) => {
  //toque esto
  
  let { email, password/*, phone, cvu, dni, fullname, address, balance*/ } = req.body;
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
      cv += digito;
    }
    //Generacion de alias
    const animal = faker.color.human();
    const color = faker.color.human();
    const company = faker.color.human();

    const ali= `${animal}.${color}.${company}`
    let passwordHash = await bcrypt.hash(password, 8);
    let createUser = new userSchema({
      email,
      password: passwordHash,
      /*phone,
      dni,*/
      cvu: cv,
      alias:ali,
      /*fullname,
      address,
      balance,*/
    });
    createUser.save();

    const update = await userSchema
      .findOne({ email: createUser.email })
      .select("-password");

    sendMail({ 
      username:createUser.email.trim('@gmail.com', ''),
      email:createUser.email
    },'welcome')

    return res.status(200).json({ update });
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
    const update = await userSchema
      .findOne({ email: user.email })
      .select("-password");

    let token = generateToken(user, 18000);

    if (!token) {
      return res.status(401).json({ error: "El token no pudo ser generado" });
    }
    return res.status(200).json({ token, update });
  } catch (error) {
    console.log(error);
  }
};
export { register, login };


/*
  646563920eac090ef212299c

  {
 "fullname": "elidavidgaleano@gmail.com",
 "email": "elidavidgaleano@gmail.com",
 "password": "12345aB!"
  }

*/