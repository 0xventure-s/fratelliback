import { Request, Response } from "express";

import InicioTrazabilidad from "../../models/InicioTrazabilidad";
import Embalaje from "../../models/Emabalaje";

export async function crearEmbalaje(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { reposoId, cantidad025, cantidad050, cantidad1, cantidad3 } =
      req.body;

    // Obtener el registro de InicioTrazabilidad asociado
    const inicioTrazabilidad = await InicioTrazabilidad.findOne({
      where: { id: reposoId },
    });

    if (!inicioTrazabilidad) {
      res
        .status(404)
        .json({ error: "Registro de inicio de trazabilidad no encontrado" });
    }

    const cantidadTotalSolicitada =
      cantidad025 * 0.25 + cantidad050 * 0.5 + cantidad1 + cantidad3 * 3;

    // Verificar que la cantidad solicitada no supere la cantidadMP
    if (cantidadTotalSolicitada > inicioTrazabilidad.cantidadMP) {
      res.status(400).json({
        error:
          "La cantidad solicitada supera la cantidad de materia prima disponible",
      });
    }

    // Crear el registro de embalaje
    const embalaje = await Embalaje.create(req.body);
    res.status(201).json({ data: embalaje });
  } catch (error) {
    console.error("Error al crear el embalaje:", error);
    res.status(500).json({ error: "Error al crear el embalaje" });
  }
}
