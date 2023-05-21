import  UserModel  from '../database/models/user.js'
import  CardModel  from '../database/models/card.js'

const idUserValidator = async (id) => {

    const user = await UserModel.findById(id);
    if (!user) {
        throw new Error(`The id ${id} doesn´t exist`)
    }

};

const idCardValidator = async (id) => {
    const card = await CardModel.findById(id);
    if (!card) {
        throw new Error(`The id ${id} doesn't exist`)
    }
};

const typeOfCardValidator = (type) => {
    if (!type || type !== 'visa' || type !== 'mastercard') {
        throw new Error('The type of card is not valid')
        
    }
}



export {
    idUserValidator,
    idCardValidator,
    typeOfCardValidator
}