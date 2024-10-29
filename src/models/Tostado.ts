import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import InicioTrazabilidad from "./InicioTrazabilidad";

@Table({
  tableName: "Tostado",
})
class Tostado extends Model {
  @ForeignKey(() => InicioTrazabilidad)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare inicioTrazabilidadId: number;

  @BelongsTo(() => InicioTrazabilidad)
  inicioTrazabilidad: InicioTrazabilidad;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare fechaHoraTostado: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare tipoDeTostado: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare temperatura: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare humedad: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare tiempoDeTostado: number;
}

export default Tostado;
