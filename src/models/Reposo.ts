import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import InicioTrazabilidad from "./InicioTrazabilidad";

@Table({
  tableName: "Reposo",
})
class Reposo extends Model {
  @ForeignKey(() => InicioTrazabilidad)
  @Column({ 
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare inicioTrazabilidadId: number;

  @BelongsTo(() => InicioTrazabilidad)
  inicioTrazabilidad: InicioTrazabilidad;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare cantidadPerdida: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare tiempoReposo: number;
}

export default Reposo;
