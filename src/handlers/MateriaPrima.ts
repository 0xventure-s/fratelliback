import { Request, Response } from "express";
import MateriaPrima from "../models/MateriaPrima";







export async function nuevaMateriaPrima(req: Request, res: Response) {
  const materiaprima = await MateriaPrima.create(req.body);

  res.json({ data: materiaprima });
}




export async function verMateriasPrimas(req: Request, res: Response) {
  const product = await MateriaPrima.findAll();

  res.json({ data: product });
}

export async function verMateriaPorId(req: Request, res: Response) {
  const { id } = req.params;
  const product = await MateriaPrima.findByPk(id);

  res.json({ data: product });
}

export async function editarMateriaPrima(req: Request, res: Response) {
  const { id } = req.params;
  const product = await MateriaPrima.findByPk(id);

  await product.update(req.body);
  await product.save();

  res.json({ data: product });
}


export async function eliminarMateriaPrima(req: Request, res: Response) {
  const { id } = req.params;

  const product = await MateriaPrima.findByPk(id);

  await product.destroy();

  res.json({ message: "Producto Eliminado" });
}
