import { Request, Response } from "express";
import InicioTrazabilidad from "../../models/InicioTrazabilidad";
import MateriaPrima from "../../models/MateriaPrima";


export async function iniciarTrazabilidad(
  req: Request,
  res: Response
): Promise<void> {
  const { cantidadMP, LR1, fechaHoraInicio } = req.body;

  try {
    // Buscar la materia prima por su ID
    const materiaPrima = await MateriaPrima.findByPk(LR1);

    if (!materiaPrima) {
      res.status(404).json({ error: "Materia Prima no encontrada" });
    }

    // Verificar que no se supere la cantidad disponible
    if (cantidadMP > materiaPrima.cantidad) {
      res
        .status(400)
        .json({ error: "Cantidad a utilizar supera la cantidad disponible" });
    }

    // Calcular nueva cantidad
    const nuevaCantidad = materiaPrima.cantidad - cantidadMP;

    // Asegurarte de que no haya cantidad negativa
    if (nuevaCantidad < 0) {
      res.status(400).json({
        error: "No se puede usar más materia prima de la que hay disponible",
      });
    }

    // Actualizar la materia prima
    await materiaPrima.update({ cantidad: nuevaCantidad });

    // Crear el registro de trazabilidad
    const trazabilidad = await InicioTrazabilidad.create({
      cantidadMP,
      LR1,
      fechaHoraInicio,
    });

    res.status(201).json({ data: trazabilidad });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear trazabilidad" });
  }
}
