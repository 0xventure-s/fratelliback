import { Request, Response } from "express";


import Tostado from "../../models/Tostado"; 
import InicioTrazabilidad from "../../models/InicioTrazabilidad"; 

export const Tostadero = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
  const { fechaHoraTostado, tipoDeTostado, temperatura, humedad, tiempoDeTostado } = req.body;

  try {
    // Verificar que el LP exista
    const lote = await InicioTrazabilidad.findByPk(id); // Usar el ID de los parámetros
    if (!lote) {
       res.status(404).json({ error: "Lote de producción no encontrado" });
    }
    console.log(lote);
    

    // Crear el registro de Tostado asociado al LP
    const nuevoTostado = await Tostado.create({
      inicioTrazabilidadId: id, // Guardar el ID de inicioTrazabilidad
      fechaHoraTostado,
      tipoDeTostado,
      temperatura,
      humedad,
      tiempoDeTostado,
    });

    res.status(201).json(nuevoTostado);
  } catch (error) {
    console.error("Error al crear el tostado:", error);
    res.status(500).json({ error: "Error al crear el tostado" });
  }
};

  
  export async function Todoslostostados(req: Request, res: Response) {
    const product = await Tostado.findAll();
  
    res.json({ data: product });
  }
  
  export async function TostadosPorId(req: Request, res: Response) {
    const { id } = req.params;
    const tostadora = await Tostado.findByPk(id);
  
    res.json({ data: tostadora });
  }
  
  export async function editarTostados(req: Request, res: Response) {
    const { id } = req.params;
    const tostadora = await Tostado.findByPk(id);
  
    await tostadora.update(req.body);
    await tostadora.save();
  
    res.json({ data: tostadora });
  }
  
  export async function eliminarTostados(req: Request, res: Response) {
    const { id } = req.params;
  
    const tostadora = await Tostado.findByPk(id);
  
    await tostadora.destroy();
  
    res.json({ message: "Producto Eliminado" });
  }
  