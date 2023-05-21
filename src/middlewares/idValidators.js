import  UserModel  from '../database/models/user.js'

const idUserValidator = async (id) => {

    const user = await UserModel.findById(id);
    if (!user) {
        throw new Error(`The id ${id} doesn´t exist`)
    }

};



export {
    idUserValidator
}