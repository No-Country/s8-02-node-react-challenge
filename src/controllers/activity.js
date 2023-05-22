import activitySchema from '../database/models/activity.js';
import mongoose from 'mongoose';
import userSchema from '../database/models/user.js';
import saveErrorToDatabase from '../utils/Error.js';
import { sendMail } from '../utils/Email.js';
import createNotification from '../utils/Notification.js';

//que en vez de usar id receptor que sea cvu o alias
//
const transfer = async (req, res) => {
    let { UserAccountId, amount, destinyAccountId, description,  } = req.body;
      
        const session = await mongoose.startSession();
        session.startTransaction();
         

      try {

        //NEEDED VALIDATIONS
        if (
            !mongoose.isValidObjectId(UserAccountId) ||
            !mongoose.isValidObjectId(destinyAccountId)
          )
            return res
              .status(400)
              .json({ error: "Los ids proporcionados no son un ObjectID válido" });
      
          if (!(amount > 0))
            return res
              .status(400)
              .json({ error: "No se pueden transferir valores negativos" });

        const emitterUser = await userSchema.findOne({ _id: UserAccountId }).session(session);
        if (!emitterUser)
          return res.status(400).json({ error: "El usuario emisor no existe" });
  
        const receptorUser = await userSchema.findOne({ _id: destinyAccountId }).session(session);
        if (!receptorUser)
          return res.status(400).json({ error: "El usuario receptor no existe" });
  
        if (emitterUser.balance < amount)
          return res.status(400).json({ error: "El usuario no posee suficiente saldo" });

        //CONTROLLER
 
        emitterUser.balance -= amount;
        receptorUser.balance += amount;
  
        await receptorUser.save();
        await emitterUser.save();
  
        await session.commitTransaction();
        session.endSession();
        
        const activity = new activitySchema({
            UserAccountId,
            destinyAccountId,
            amount,
            description
        })
        activity.save()

        // NOTIFICATIONS AND EMAILS RESPONSE
        
        await sendMail({ 
            username:receptorUser.email,
            email:receptorUser.email
          },'transfer')

        await createNotification({
            destinyAccountId, 
            message: `¡Tienes una transferencia de ${receptorUser.email}!`,
            type: "transfer"
        });

        return res.status(200).json({ message:"transfer successful" });
      } catch (error) {

        await session.abortTransaction();
        session.endSession();

        //RECORD ERROR ON DATABASE

        saveErrorToDatabase(error)
        return res.status(500).json({ error: "Error al realizar la transferencia" });
      }
  };


  const getActivities = async (req, res) => {
    let { id, amount } = req.body;

    try {
      const query = {
        $or: [
          { UserAccountId: id },
          { destinyAccountId: id }
        ]
      };
      const activities = await activitySchema.find(query)
        .sort({ createdAt: -1 })
        .limit(amount !== 0 ? amount : -1);

      if (activities.length === 0) {
        return res.status(200).json({ message: "No se encontraron actividades" });
      }
   
      return res.status(200).json({ activities });
    } catch (error) {
      saveErrorToDatabase(error);
      return res.status(500).json({ error: "Error al obtener actividades" });
    }
  };

export {transfer,getActivities} ;

/* 
ERROR EXAMPLE, JUST IN CASE

        const errorData = {
            message: '¡Esto es un error de prueba!',
            stackTrace: 'Detalles del seguimiento de la pila de llamadas...',
            status: 500, // Código de estado HTTP
            code: 'ERROR_BACKEND', // Código de error personalizado
            // Otros campos que desees agregar
          };
        throw new Error(JSON.stringify(errorData));

*/