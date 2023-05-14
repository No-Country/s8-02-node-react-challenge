import { v2 as cloudinary } from 'cloudinary';


const fileUpload=(file)=>{
  console.log(file)
// Configura la biblioteca de Cloudinary con tu información de autenticación
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// Ruta para subir la imagen directamente a Cloudinary

  // Utiliza el método "uploader.upload" de Cloudinary para cargar la imagen
  cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
    if (error) {
      // Manejo del error
      console.error(error.message);
      
    }

    // Si la carga es exitosa, puedes acceder a la URL de la imagen en result.secure_url
   return {imageUrl: result.secure_url} 
  });

}
export default fileUpload;