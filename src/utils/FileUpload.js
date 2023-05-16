import { v2 as cloudinary } from 'cloudinary';


const fileUpload=async(file)=>{
 
// Configura la biblioteca de Cloudinary con tu información de autenticación
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

try {
  //toque esto tambien
  // Utiliza el método "uploader.upload" de Cloudinary para cargar la imagen
  let url= await cloudinary.uploader.upload(file.tempFilePath);
  return url.url

} catch (error) {
  console.log(error);
}


}
export default fileUpload;