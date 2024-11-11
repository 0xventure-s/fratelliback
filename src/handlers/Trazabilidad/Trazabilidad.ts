import { Request, Response } from "express";
import InicioTrazabilidad from "../../models/InicioTrazabilidad";
import MateriaPrima from "../../models/MateriaPrima";

export async function iniciarTrazabilidad(req: Request,res: Response): Promise<void> {

  
  const { cantidadMP, LR1, fechaHoraInicio } = req.body;

  try {
    // Validar el ID de materia prima
    if (!Number.isInteger(LR1) || LR1 <= 0) {
      res.status(400).json({ error: "ID de materia prima inválido" });
      return;
    }

    // Buscar la materia prima por su ID
    const materiaPrima = await MateriaPrima.findByPk(Number(LR1));
    if (!materiaPrima) {
      res.status(404).json({ error: "Materia Prima no encontrada" });
      return;
    }

    // Verificar que no se supere la cantidad disponible
    if (cantidadMP > materiaPrima.cantidad) {
      res
        .status(400)
        .json({ error: "Cantidad a utilizar supera la cantidad disponible" });
      return;
    }

    // Calcular nueva cantidad y evitar negativos
    const nuevaCantidad = materiaPrima.cantidad - cantidadMP;
    if (nuevaCantidad < 0) {
      res
        .status(400)
        .json({
          error: "No se puede usar más materia prima de la que hay disponible",
        });
      return;
    }

    // Actualizar la cantidad en la materia prima
    await materiaPrima.update({ cantidad: nuevaCantidad });

    // Crear el registro de trazabilidad
    const trazabilidad = await InicioTrazabilidad.create({
      cantidadMP,
      LR1,
      fechaHoraInicio,
    });

    // Incluir la variedad de la materia prima en la respuesta
    res.status(201).json({
      data: {
        ...trazabilidad.toJSON(),
        materiaPrima: {
          variedad: materiaPrima.variedad,
        },
      },
    });
  } catch (error) {
    console.error("Error al iniciar trazabilidad:", error);
    res.status(500).json({ error: "Error al crear trazabilidad" });
  }
}

export async function verTrazabilidades(
  req: Request,
  res: Response
): Promise<void> {
  try {
    // Obtener todas las trazabilidades con solo el campo "variedad" de MateriaPrima
    const trazabilidades = await InicioTrazabilidad.findAll({
      include: [
        {
          model: MateriaPrima,
          attributes: ["variedad"], // Solo traemos "variedad"
        },
      ],
    });

    // Verificar si se encontraron trazabilidades
    if (trazabilidades.length === 0) {
      res.status(404).json({ error: "No se encontraron trazabilidades" });
      return;
    }

    // Enviar la respuesta con los datos obtenidos
    res.json({ data: trazabilidades });
  } catch (error) {
    console.error("Error al obtener trazabilidades:", error);
    res.status(500).json({ error: "Error al obtener trazabilidades" });
  }
}
