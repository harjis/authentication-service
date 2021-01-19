import express from "express";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";

import * as homeController from "./controllers/home_controller";

export default function createServer() {
  const app = express();
  app.use(bodyParser.json());
  app.set("port", 3000);
  app.get("/api", homeController.index);

  app.use(errorHandler());

  return app;
}
