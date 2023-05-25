import userSchema from "../database/models/user.js";
import UserModel from "../database/models/user.js"
import cardSchema from "../database/models/card.js"
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import user from "../database/models/user.js";
import { faker } from '@faker-js/faker';



const getAllUser = async (req, res) => {
  try {
    const user = await userSchema.find({});
    res.status(200).send({ user });
  } catch (error) {
    console.log(error.message);
  }
};


const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userSchema.findOne({_id:id}).populate({
      path: 'cards',
      match: { id_user: id },
      options: { strictPopulate: false }
    });
    res.status(200).send({ user });
  } catch (error) {
    console.log(error.message);
  }
};



const updateUser = async (req, res) => {
    let {id}=req.params
    let {body}=req
    try {
        const user = await userSchema.findByIdAndUpdate({_id:id}, body, { new: true });
        res.status(200).send({ user });
        
    } catch (error) {
        console.log(error);
        res.status(422).send({message:"failed to update resource", valid:false });       
    }

};

const deleteUser=async(req,res)=>{
    let {id}=req.params
    try {
        let user= await userSchema.findByIdAndDelete({_id:id})
        res.status(200).send({message:"User deleted",valid:true});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:"could not delete the resource",valid:false});
    }
}

export { updateUser, getAllUser, getUser,deleteUser };