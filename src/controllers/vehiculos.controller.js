import { getConnection, querys, sql } from "../database";

export const getVehiculos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getVehiculos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const entryVehiculo = async (req, res) => {
  const { placa, fechaIngreso } = req.body;
  // validating
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("placa", sql.VarChar, placa)
      .input("fechaIngreso", sql.VarChar, fechaIngreso)
      .query(querys.entryVehiculo);

    res.status(200);
    res.json({ placa, fechaIngreso });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVehiculoByPlaca = async (req, res) => {

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("placa", req.params.placa)
      .query(querys.getVehiculoByPlaca);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const exitVehiculo = async (req, res) => {
  const { fechaSalida } = req.body;

  // validating
  if (fechaSalida == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("fechaSalida", sql.VarChar, fechaSalida)
      .input("placa", req.params.placa)
      .query(querys.exitvehiculo);
    res.json({ fechaSalida });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const actualizarTiempo = async (req, res) => {
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("placa", req.params.placa)
      .query(querys.actualizarTiempo);
    res.json()
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const obtenerTiempo = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("placa", req.params.placa)
      .query(querys.obtenerTiempo);
    return res.json(result.recordset[0])
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

}

export const getCupos = async(req,res) =>{
  try{
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(querys.getCapacidad);
    return res.json(result.recordset[0]["capacidad"])
  } catch (error){
    res.status(500);
    res.send(error.message);
  }
}

export const setCupos = async(req,res) =>{

  const { capacidad } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("capacidad", sql.Int, capacidad)
      .query(querys.setCapacidad);
    res.json()
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


