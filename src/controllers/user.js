import userSchema from "../database/models/user.js";
import { deleteImage } from "../utils/FileUpload.js";


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
  let token = req.headers;

  if (!id || !token) {
    return res
      .status(409)
      .json({ error: "El USUARIO no existe o el TOKEN no es valido" });
  };


  try {
    const user = await userSchema.findOne({_id:id}).populate({
      path: 'cards',
      match: { id_user: id },
      options: { strictPopulate: false }
    });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error.message);
  }
};



const updateUser = async (req, res) => {
  let {id}=req.params;
  let token = req.headers;
  let {body}=req;

  if (!id || !token) {
    return res
      .status(409)
      .json({ error: "El USUARIO no existe o el TOKEN no es valido" });
  };


    try {
      const user = await userSchema.findByIdAndUpdate({_id:id}, body, { new: true });
      
      res.status(200).send({ user }); 
    } catch (error) {
        console.log(error);
        res.status(422).send({message:"failed to update resource", valid:false });       
    }

};

const deleteUser=async(req,res)=>{
    let {id}=req.params;
    let token = req.headers;

    if (!id || !token) {
      return res
        .status(409)
        .json({ error: "El USUARIO no existe o el TOKEN no es valido" });
    };
    try {
      let user= await userSchema.findByIdAndDelete({_id:id})

      await deleteImage(user.urlProfile.public_id)
        
      res.status(200).send({message:"User deleted",valid:true});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:"could not delete the resource",valid:false});
    }
}

export { updateUser, getAllUser, getUser, deleteUser };
