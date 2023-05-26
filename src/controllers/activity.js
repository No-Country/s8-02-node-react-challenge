import activitySchema from '../database/models/activity.js';
import mongoose from 'mongoose';
import userSchema from '../database/models/user.js';
import saveErrorToDatabase from '../utils/Error.js';
import { sendMail } from '../utils/Email.js';
import createNotification from '../utils/Notification.js';

//que en vez de usar id receptor que sea cvu o alias
//
const transfer = async (req, res) => {
  try {
    const { UserAccountId, amount, description, alias, cvu } = req.body;

    const validationResult = validateTransferData(alias, cvu, amount);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const receptorUser = await findUserByAliasOrCvu(alias, cvu, session);
      if (!receptorUser) {
        return res.status(400).json({ error: "El usuario receptor no existe" });
      }

      const emitterUser = await findUserById(UserAccountId, session);
      if (!emitterUser) {
        return res.status(400).json({ error: "El usuario emisor no existe" });
      }

      if (emitterUser.balance < amount) {
        return res.status(400).json({ error: "El usuario no posee suficiente saldo" });
      }

      performTransfer(emitterUser, receptorUser, amount);

      await receptorUser.save();
      await emitterUser.save();

      await session.commitTransaction();
      session.endSession();

      let activity = await createActivity(UserAccountId, receptorUser.id, amount);
      await sendTransferEmail(receptorUser.email);
      console.log(activity)
      await createNotification(receptorUser.id, `¡Tienes una transferencia de ${receptorUser.email}!`, "transfer");
      let response = buildResponseObject("approved", amount, activity._id, receptorUser);
      verifyTransfer(emitterUser._id, emitterUser.balance) ? 
      res.status(200).json({ ...response }) : 
      res.status(200).json({ error: "failed" });

    } catch (error) {
      await session.abortTransaction();
      session.endSession();

      saveErrorToDatabase(error);

      return res.status(500).json({ error: "Error al realizar la transferencia" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

const validateTransferData = (alias, cvu, amount) => {
  if (!alias && !cvu) {
    return { error: "Necesitamos un alias o cvu para poder transferir" };
  }

  if (!(amount > 0)) {
    return { error: "No se pueden transferir valores negativos" };
  }

  return { error: null };
};

const findUserByAliasOrCvu = async (alias, cvu, session) => {
  const query = { $or: [{ cvu: cvu }, { alias: alias }] };
  return await userSchema.findOne(query).session(session);
};

const findUserById = async (userId, session) => {
  return await userSchema.findOne({ _id: userId }).session(session);
};

const performTransfer = (emitterUser, receptorUser, amount) => {
  emitterUser.balance -= amount;
  receptorUser.balance += amount;
};

const createActivity = async (userAccountId, receptorUserId, amount) => {
  const activity = new activitySchema({
    UserAccountId: userAccountId,
    destinyAccountId: receptorUserId,
    amount:amount,
    type: "transfer",
    payment: {
      method: "balance"
    }
  });

  await activity.save();
  return activity;
};

const sendTransferEmail = async (email) => {
  await sendMail({ username: email, email }, 'transfer');
};

const verifyTransfer = async (userId, userBalance) => {
  const { balance } = await userSchema.findById(userId, { balance: 1 });
  return balance === userBalance;
};
const buildResponseObject = (status, amount, operationNumber, receptorUser) => {
  console.log()
  return {
    status: status,
    amount: amount,
    operationNumber: operationNumber,
    to:{
      receptorName: receptorUser.fullname,
      receptorAlias: receptorUser.alias,
      receptorCvu: receptorUser.cvu
    }
  };
};
 ///// HERE STARTS A NEW ENDPOINT

 const getActivities = async (req, res) => {
  try {
    const { id, amount } = req.body;

    const query = createQuery(id);
    const activities = await findActivities(query, amount);

    if (activities.length === 0) {
      return res.status(200).json({ message: "No se encontraron actividades" });
    }

    return res.status(200).json({ activities });
  } catch (error) {
    saveErrorToDatabase(error);
    return res.status(500).json({ error: "Error al obtener actividades" });
  }
};

const createQuery = (id) => {
  return {
    $or: [
      { UserAccountId: id },
      { destinyAccountId: id }
    ]
  };
};

const findActivities = async (query, amount) => {
  const activitiesQuery = activitySchema.find(query)
    .sort({ createdAt: -1 })
    .limit(amount !== 0 ? amount : -1);

  return await activitiesQuery.exec();
};

  const addfounds =async(req,res)=>{
      const {id}=req.params
      const {tarjet_number, cvv, balance }=req.body
      try {
        if(!tarjet_number || !cvv){
          return res.status(200).send({message:"es necesaria una targeta", valid: false})
        }
        let updateblance= await userSchema.findById({_id:id}).select("balance")
        
        const update= await userSchema.findOneAndUpdate({_id:id}, {balance:updateblance.balance + balance},{ new: true } )
        
        res.send(update)
        
      } catch (error) {
        res.send({message:"no se pudo ingresar el dinero"})
        console.log(error);
      }
  }

export {transfer,getActivities,addfounds} ;

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