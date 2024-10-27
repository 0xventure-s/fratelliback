import { Request, Response } from "express";
import InicioTrazabilidad from "../../models/InicioTrazabilidad";
import Reposo from "../../models/Reposo";

const crearReposo = async (req: Request, res: Response):Promise<void> => {
    const { inicioTrazabilidadId, cantidadPerdida, tiempoReposo } = req.body;
  
    try {
      // Verificar si existe el registro de InicioTrazabilidad
      const inicioTrazabilidad = await InicioTrazabilidad.findByPk(inicioTrazabilidadId);
      if (!inicioTrazabilidad) {
        res.status(404).json({ message: 'Inicio de trazabilidad no encontrado.' });
      }
  
      // Calcular la nueva cantidad de materia prima
      const cantidadRestante = inicioTrazabilidad.cantidadMP - cantidadPerdida;
  
      // Verificar que la cantidad restante no sea negativa
      if (cantidadRestante < 0) {
        res.status(400).json({ message: 'La cantidad perdida supera la cantidad disponible.' });
      }
  
      // Crear el nuevo registro de Reposo
      const nuevoReposo = await Reposo.create({
        inicioTrazabilidadId,
        cantidadPerdida,
        tiempoReposo,
      });
  
      // Actualizar la cantidad de materia prima en InicioTrazabilidad
      await inicioTrazabilidad.update({ cantidadMP: cantidadRestante });
  
      // Responder con el nuevo registro creado
     res.status(201).json(nuevoReposo);
    } catch (error) {
      console.error(error);
     res.status(500).json({ message: 'Error al crear el reposo.', error });
    }
  };
  
  export default crearReposo;

  export async function verReposos(req: Request, res: Response) {
    const reposo = await Reposo.findAll();
  
    res.json({ data: reposo });
  }
  
  export async function verreposoPorId(req: Request, res: Response) {
    const { id } = req.params;
    const reposo = await Reposo.findByPk(id);
  
    res.json({ data: reposo });
  }
  
  export async function editarreposo(req: Request, res: Response) {
    const { id } = req.params;
    const reposo = await Reposo.findByPk(id);
  
    await reposo.update(req.body);
    await reposo.save();
  
    res.json({ data: reposo });
  }
  
  export async function eliminarreposo(req: Request, res: Response) {
    const { id } = req.params;
  
    const reposo = await Reposo.findByPk(id);
  
    await reposo.destroy();
  
    res.json({ message: "Producto Eliminado" });
  }