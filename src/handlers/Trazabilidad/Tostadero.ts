import { Request, Response } from "express";
import Tostado from "../../models/Tostado";


export async function Tostadero(req: Request, res: Response) {
    try {
      const tostadora = await Tostado.create(req.body);
      res.status(201).json({ data: tostadora }); // 201 Created
    } catch (error) {
      console.error("Error al crear el tostado:", error);
      res.status(500).json({ error: "Error al crear el tostado" });
    }
  }
  
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
  