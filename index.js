import app from "./app.js";


const bootstrap = () => {
  app.listen(app.get("port"), async () => {
    console.log(`Server on port ${app.get("port")}`);
  });
};

bootstrap();