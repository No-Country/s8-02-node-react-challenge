import userSchema from "../database/models/user.js"
import ActivityModel from "../database/models/activity.js";

const addMoney=async(req,res)=>{

    const {id}=req.params
    const {cardNumber, cvv,balance}=req.body
    try{
    const user= await userSchema.findById({_id:id}).populate({
        path: 'cards',
        match: { id_user: id },
        options: { strictPopulate: false }
      });

    
    if(balance <= 0){
        return res.status(500).send({message:"El balance no puede ser negativo",valid:false})
    }
    if(!user){
        return res.status(404).send({message:"usuario no registrado",valid:false})
    }
    
    if(cardNumber!==user.cards[0].user_number||cvv !== user.cards[0].cvv ){
        return res.status(404).send({message:"Los datos de la tarjeta no son correctos",valid:false})
    }

    const update= await userSchema.findByIdAndUpdate({_id:id},{balance:user.balance + balance},{new:true})
    
    const activity = new ActivityModel({
        UserAccountId: id,
        destinyAccountId: id,
        amount:balance,
        type: "Recarga",
        payment: {
          method: "balance"
        }
      });
    
    const dataOperation = await activity.save();
    res.status(200).send({status:"aproved", mount:balance, operationNumber:dataOperation._id,dataOperation})
    }catch(error){
        res.status(500).send({message:"error no se pudo realizar la recarga"})
        console.log(error);

    }
} 




export  {addMoney}