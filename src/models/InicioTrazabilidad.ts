import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import MateriaPrima from "./MateriaPrima"; // Asegúrate de importar el modelo

@Table({
  tableName: "InicioTrazabilidad",
})
class InicioTrazabilidad extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  declare cantidadMP: number;

  @ForeignKey(() => MateriaPrima)
  @Column({
    type: DataType.INTEGER,
  })
  declare LR1: number; // ID de Materia Prima

  @BelongsTo(() => MateriaPrima)
  materiaPrima: MateriaPrima; // Relación con Materia Prima

  @Column({
    type: DataType.DATE, // Agrega el tipo de dato DATE para fecha y hora
  })
  declare fechaHoraInicio: Date; // Fecha y hora de inicio
}

export default InicioTrazabilidad;
