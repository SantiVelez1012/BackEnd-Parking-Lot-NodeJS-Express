export const querys = {
  getVehiculos: "select * from vehiculos where estado = 1",
  
  getVehiculoByPlaca: "select * from vehiculos Where placa = @placa",

  entryVehiculo: "if exists(select * from vehiculos where placa = @placa) begin update vehiculos set fechaIngreso = @fechaIngreso, fechaSalida = null, minutosParqueado = null, estado = 1 where placa = @placa end else begin insert into vehiculos (placa, fechaIngreso) values (@placa, Cast(@fechaIngreso as DateTime)) end",

  exitvehiculo: "update vehiculos set fechaSalida = Cast(@fechaSalida as DateTime), estado = 0 where placa = @placa",

  actualizarTiempo:"update vehiculos set minutosParqueado = DATEDIFF(minute,fechaIngreso, fechaSalida) where placa=@placa",

  obtenerTiempo:"select minutosParqueado from vehiculos where placa = @placa",

  getCapacidad:"select capacidad from parqueaderos where id = 1",

  setCapacidad:"update parqueaderos set capacidad = @capacidad where id = 1"
};
