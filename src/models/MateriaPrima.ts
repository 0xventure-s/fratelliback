import { Default, Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
  tableName: "MateriaPrima",
})
class MateriaPrima extends Model {
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
}

export default MateriaPrima;


