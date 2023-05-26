import userSchema from "../database/models/user.js";

const updatePass=async(req,res)=>{
const {id}=req.params
const {newPass, actualPass}=req.body

try {
    const user=await userSchema.findById({_id:id})
    
    const valid = await bcrypt.compare(actualPass, user.password);
    
        if (!valid) {
          return res.status(409).json({ error: "El password actual es incorrecto" });
        }

        if (!user) {
            return res.status(409).json({ error: "El usuario incorrecto" });
          }
          let passwordHash = await bcrypt.hash(newPass, 8);
        
        const userPass=await userSchema.findOneAndUpdate({_id:id},{password:passwordHash}) 
        
        res.status(200).send({message:"password actualizado"})
    
    }catch (error) {
     res.status(500).send({message:"No se pudo actulaizar el password"})
     console.log(error)
    }
    
} 



export {updatePass}