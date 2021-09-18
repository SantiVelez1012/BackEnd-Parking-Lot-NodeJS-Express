import express from "express";
import cors from "cors";
import vehiculosRoutes from "./routes/vehiculos.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

app.set("port", config.port);

app.use(cors());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api", vehiculosRoutes);

export default app;
