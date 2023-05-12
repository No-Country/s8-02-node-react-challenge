import app from "./app";


const bootstrap = () => {
  app.listen(app.get("port"), async () => {
    console.log(`Server on port ${app.get("port")}`);
  });
};

bootstrap();