import cardSchema from "../database/models/card.js"
import userSchema from "../database/models/user.js"

const getCard=async(req,res)=>{
const {id}=req.params 
try {
    const card= await cardSchema.findById({_id:id})
    res.status(200).send({card,valid:true})
} catch (error) {
    res.status(422).send({message:"User not found", valid:false });        
}
    
}


const createCard=async(req,res)=>{
    let {id}=req.params
    let {type,
        bank_emisor,
        bank, // marca de tarjeta 
        expiration_date,
        user_card,
        user_number,
        cvv,
        id_user}=req.body
        
        try {
        const card= new cardSchema({    
            type,
            bank_emisor,
            bank, 
            expiration_date,
            user_card,
            user_number,
            cvv,
            id_user:id})
        
        card.save()
       const user= await userSchema.findByIdAndUpdate({_id:id},{ $push: { cards: card._id } },
        { new: true })
       return res.status(200).send({message:"card Create", valid:true})
        
    } catch (error) {
        console.log(error.message);
        res.status(422).send({message:"failed to create resource", valid:false });        
    }

}

const updateCard=async (req,res)=>{
    let {id}=req.params
    let {body}=req
     try {
         let updateCard= await cardSchema.findByIdAndUpdate({_id:id},body,{new:true})
        return res.status(200).send({message:"User update",updateCard,valid:true})
     } catch (error) {
        console.log(error);
       return  res.status(500).send({message:"error updating the record"})
     }
}

const deleteCard=async(req,res)=>{
    let {id}=req.params
    try {
        
        const deleteCard= await cardSchema.findOneAndDelete({_id:id})
        return  res.status(200).send({message:"Card delete"})
    } catch (error) {
        console.log(error);
       return res.status(500).send("failed to delete the card")
    }
}

export {getCard,createCard, updateCard, deleteCard}