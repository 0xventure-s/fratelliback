
import { Request, Response } from "express";
import Analisis from "../../models/Analisis";


export async function crearAnalisis(req: Request, res: Response) {
    try {
      const analisis = await Analisis.create(req.body);
      res.status(201).json({ data: analisis }); // 201 Created
    } catch (error) {
      console.error("Error al crear el tostado:", error);
      res.status(500).json({ error: "Error al crear el tostado" });
    }
  }

  export async function verAnalisis(req: Request, res: Response) {
    const analisis = await Analisis.findAll();
  
    res.json({ data: analisis });
  }
  
  export async function verAnalisisPorId(req: Request, res: Response) {
    const { id } = req.params;
    const analisis = await Analisis.findByPk(id);
  
    res.json({ data: analisis });
  }
  
  export async function editarAnalisis(req: Request, res: Response) {
    const { id } = req.params;
    const analisis = await Analisis.findByPk(id);
  
    await analisis.update(req.body);
    await analisis.save();
  
    res.json({ data: analisis });
  }
  
  export async function eliminarAnalisis(req: Request, res: Response) {
    const { id } = req.params;
  
    const analisis = await Analisis.findByPk(id);
  
    await analisis.destroy();
  
    res.json({ message: "Producto Eliminado" });
  }