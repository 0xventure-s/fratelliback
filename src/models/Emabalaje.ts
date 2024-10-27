import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import Reposo from "./Reposo"; // Asegúrate de importar el modelo

@Table({
  tableName: "Embalaje",
})
class Embalaje extends Model {
  // Agregar un campo UUID que se genera automáticamente
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4, // Genera automáticamente un UUID v4
    primaryKey: true, // Si deseas que sea la clave primaria
  })
  declare CodigoDeTrazabilidad: string; // UUID para identificar cada registro de Embalaje

  @ForeignKey(() => Reposo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare reposoId: number; // ID del registro de Reposo

  @BelongsTo(() => Reposo)
  reposo: Reposo; // Relación con Reposo

  @Column({
    type: DataType.DATE, // Fecha y hora del embalaje
    allowNull: false,
  })
  declare fechaHoraEmbalaje: Date;

  @Column({
    type: DataType.INTEGER, // Cantidad de productos de 0.25kg
    allowNull: true,
  })
  declare cantidad025: number;

  @Column({
    type: DataType.INTEGER, // Cantidad de productos de 0.50kg
    allowNull: true,
  })
  declare cantidad050: number;

  @Column({
    type: DataType.INTEGER, // Cantidad de productos de 1kg
    allowNull: true,
  })
  declare cantidad1: number;

  @Column({
    type: DataType.INTEGER, // Cantidad de productos de 3kg
    allowNull: true,
  })
  declare cantidad3: number;
}

export default Embalaje;
