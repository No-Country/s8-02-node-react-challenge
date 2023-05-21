import Notification from "../database/models/notifications.js";

const getNotificationsById = async (req, res) => {
    try {
      const { id, amount } = req.body;
  
      const query = { destinyAccountId: id };
  
      let notifications;
      if (amount) {
        const limitValue = amount ? parseInt(amount) : 0;
        notifications = await Notification.find(query)
          .sort({ timestamp: -1 })
          .limit(limitValue);
      } 

      res.status(200).json({ notifications: notifications.length > 0 ? notifications : "No hay notificaciones" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error al obtener las notificaciones" });
    }
  };
  
export  {getNotificationsById};