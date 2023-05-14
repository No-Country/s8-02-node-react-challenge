import jwt from "jsonwebtoken";



function generateToken(user, exp) {
  if (user) {
    console.log(user);
    
    let token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET, //confirmamos que es un string lo que va a recibir
      {
        expiresIn: exp,
      }
    );
    return token;
  }
}

export { generateToken }; 