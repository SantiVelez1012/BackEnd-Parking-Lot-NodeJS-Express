import { Router } from "express";
import {
  getVehiculos,
  entryVehiculo,
  getVehiculoByPlaca,
  exitVehiculo,
  actualizarTiempo,
  obtenerTiempo,
  getCupos,
  setCupos
} from "../controllers/vehiculos.controller";

const router = Router();

router.get("/vehiculos", getVehiculos);

router.post("/vehiculos/entry", entryVehiculo);

router.get("/vehiculos/:placa", getVehiculoByPlaca);

router.post("/vehiculos/:placa", exitVehiculo);

router.post("/vehiculos/actualizarTime/:placa", actualizarTiempo);

router.get("/vehiculos/getTiempo/:placa", obtenerTiempo);

router.get("/vehiculos/cupos/get", getCupos)

router.post("/vehiculos/cupos/set", setCupos)

export default router;
