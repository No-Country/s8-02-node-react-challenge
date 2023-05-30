import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/generateToken.js";

// Middleware de verificación de token
export const requireToken = (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const token = req.headers.authorization;

  // Verificar si el token existe
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    // Verificar y decodificar el token utilizando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    // Agregar el payload decodificado al objeto de solicitud para que esté disponible en las siguientes rutas
    req.user = decoded;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
    console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
  }
};

// export default verifyTokenMiddleware;

/*export const requireToken = (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (!token) throw new Error("No Bearer");

        token = token.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = id;

        next();
    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};*/