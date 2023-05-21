import express from "express";
import dotenv from "dotenv";
dotenv.config()
import cors from "cors";
import morgan from "morgan";
// Swagger
import swaggerUI from "swagger-ui-express";
import { specs } from "./swaggerDocs.js";
// Import for the file
import fileUpload from "express-fileupload";
//import routes
import generalRoutes from './routes/index.js'

//init app. define and set port
const app = express();

// Config whitelist
const whiteList = [process.env.ORIGIN1]
console.log(whiteList);

// Cors
app.use(cors({
    origin: function (origin, callback) {
        try {
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin);
            }
        } catch (error) {
            return error(
                `Error de CORS origin: ${origin} No autorizado!`
            );
        }
        },
        credentials: true,
    })
)

//middlewares
app.use(express.static("public"));

// File Upload
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*") // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PATCH, DELETE'
    )
    next()
}); 


//routes
app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth", generalRoutes)


const port = process.env.PORT || 3000;
app.set("port", port);

export default app;