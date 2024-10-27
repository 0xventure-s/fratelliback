import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import InicioTrazabilidad from "./InicioTrazabilidad"; // Importa el modelo

@Table({
  tableName: "Reposo",
})
class Reposo extends Model {
  @ForeignKey(() => InicioTrazabilidad)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare inicioTrazabilidadId: number; // ID de Inicio Trazabilidad

  @BelongsTo(() => InicioTrazabilidad)
  inicioTrazabilidad: InicioTrazabilidad; // Relación con Inicio Trazabilidad

  @Column({
    type: DataType.INTEGER, // Cantidad de materia prima perdida en kilos
    allowNull: false,
  })
  declare cantidadPerdida: number; // Cantidad de materia prima perdida en kilos

  @Column({
    type: DataType.INTEGER, // Tiempo de reposo en horas
    allowNull: false,
  })
  declare tiempoReposo: number; // Tiempo de reposo en horas
}

export default Reposo;
