import  QRCode  from "qrcode"
import toSJIS from "qrcode/helper/to-sjis.js"
import userSchema from "../database/models/user.js"
const sendQr=async (req,res)=>{
    const {alias, mount}=req.params;
    const token = req.headers;
    
    if (!token) {
        return res
          .status(409)
          .json({ error: "El TOKEN no es valido" });
      };

      
    const user=await userSchema.findOne({alias:alias})
    if (!user){
        return res.status(400).send({message:"No se encontro al usuario"})
    }
    
    let data={user,mount}
    QRCode.toDataURL(JSON.stringify(data),{toSJISFunc:toSJIS, width:200},(err,url)=>{
        res.status(200).send({url})
    })

}


export {sendQr}