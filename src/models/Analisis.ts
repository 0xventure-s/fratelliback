import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "Analisis",
})
class Analisis extends Model {
  @Column({
    type: DataType.STRING(),
  })
  declare notadecata: string;

  @Column({
    type: DataType.STRING(),
  })
  declare perfildelcafe: string;
}

export default Analisis;
