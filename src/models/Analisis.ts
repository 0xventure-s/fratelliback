import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import InicioTrazabilidad from "./InicioTrazabilidad";

@Table({
  tableName: "Embalaje",
})
class Embalaje extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare CodigoDeTrazabilidad: string;

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
  declare fechaHoraEmbalaje: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare cantidad025: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare cantidad050: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare cantidad1: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare cantidad3: number;
}

export default Embalaje;
