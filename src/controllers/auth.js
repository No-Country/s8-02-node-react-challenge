import userSchema from '../database/models/user.js';
import {generateToken} from '../utils/generateToken.js';
import bcrypt from 'bcrypt';
import FileUpload from '../utils/FileUpload.js';
const register = async (req,res) =>{
    console.log(req.file)
  let {
    email,
    password,
    phone,
    dni,
    fullname,
    address,
    balance,
    file
} = req.body;
try {
    let checkEmail = await userSchema.findOne({email})
  
    if(checkEmail) {
      return res.status(409).json({ error: 'El correo electrónico ya está en uso' });
    }
/*     let test = FileUpload(file)
    console.log(test) */
    let passwordHash = await bcrypt.hash(password, 8);
    let createUser = await new userSchema({
      email,
      password:passwordHash,
      phone,
      dni,
      fullname,
      address,
      balance
    })
    createUser.save();

    const update = await userSchema
      .findOne({ email: createUser.email })
      .select("-password");


    return res.status(200).json({update})
} catch (error) {
    console.log(error.message)
}

}
const login = async(req,res) => {
    let {email,password} = req.body;
    try {
        let user = await userSchema.findOne({email})
  
    if(!user) {
      return res.status(409).json({ error: 'Credenciales errores' });
    }

    const valid = await bcrypt.compare(password, user.password);

    if(!valid){
        return res.status(409).json({ error: 'El password es incorrecto' });
      }
      const update = await userSchema
      .findOne({ email: user.email })
      .select("-password");

    let token = generateToken(user,18000);

    if(!token){
        return res.status(401).json({error:'El token no pudo ser generado'})
    }
    return res.status(200).json({token,update})

    } catch (error) {
        console.log(error)
    }
    
}
export {register,login};
