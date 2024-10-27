import { Table, Column, DataType, Model, ForeignKey } from "sequelize-typescript";
import MateriaPrima from "./MateriaPrima"; // Asegúrate de importar el modelo

@Table({
  tableName: "Tostado", // Nombre de la tabla
})
class Tostado extends Model {
  @ForeignKey(() => MateriaPrima) // Si tienes una relación con MateriaPrima
  @Column({
    type: DataType.INTEGER, // ID de Materia Prima
    allowNull: true, // No permitir nulos
  })
  declare LR1: number; // ID de materia prima

  @Column({
    type: DataType.DATE, // Fecha y hora de tueste
    allowNull: false, // No permitir nulos
  })
  declare fechaHoraTostado: Date;

  @Column({
    type: DataType.STRING, // Tipo de tueste
    allowNull: false, // No permitir nulos
  })
  declare tipoDeTostado: string; // Tipo de tueste (ej. medio, oscuro, claro)

  @Column({
    type: DataType.FLOAT, // Temperatura en grados Celsius
    allowNull: false, // No permitir nulos
  })
  declare temperatura: number;

  @Column({
    type: DataType.FLOAT, // Porcentaje de humedad
    allowNull: false, // No permitir nulos
  })
  declare humedad: number;

  @Column({
    type: DataType.INTEGER, // Tiempo total en minutos
    allowNull: false, // No permitir nulos
  })
  declare tiempoDeTostado: number;
  cantidadMP: any;
}

export default Tostado;
