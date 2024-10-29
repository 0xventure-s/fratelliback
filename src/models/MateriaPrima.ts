import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import InicioTrazabilidad from "./InicioTrazabilidad";

@Table({
  tableName: "MateriaPrima",
})
class MateriaPrima extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true, // Definir 'id' como clave primaria
    autoIncrement: true, // Habilitar auto-incremento
  })
  declare id: number;

  @Column({
    type: DataType.STRING(),
  })
  declare lote: string;

  @Column({
    type: DataType.STRING(),
  })
  declare variedad: string;

  @Column({
    type: DataType.INTEGER(),
  })
  declare cantidad: number;

  @Column({
    type: DataType.DATE(),
  })
  declare fechadeentrega: Date;

  @HasMany(() => InicioTrazabilidad)
  trazabilidades: InicioTrazabilidad[]; // Relación con InicioTrazabilidad
}

export default MateriaPrima;
