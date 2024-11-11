import { Table, Column, DataType, Model, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import MateriaPrima from "./MateriaPrima"; // Asegúrate de importar el modelo
import Tostado from "./Tostado";

@Table({
  tableName: "InicioTrazabilidad",
})
class InicioTrazabilidad extends Model {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true, // Definir 'id' como clave primaria
    autoIncrement: true, // Habilitar auto-incremento
  })
  declare id: number;
 
  @Column({
    type: DataType.INTEGER,
  })
  declare cantidadMP: number;

  @ForeignKey(() => MateriaPrima)
  @Column({
    type: DataType.INTEGER,
  })
  declare LR1: number;

  @Column({
    type: DataType.DATE,
  })
  declare fechaHoraInicio: Date;

  @BelongsTo(() => MateriaPrima)
  materiaPrima: MateriaPrima;


  @HasOne(() => Tostado)
  Tostado: Tostado;

}




export default InicioTrazabilidad;
