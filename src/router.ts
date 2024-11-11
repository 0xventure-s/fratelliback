import { Router } from "express";
import {
  editarMateriaPrima,
  eliminarMateriaPrima,
  nuevaMateriaPrima,
  verMateriaPorId,
  verMateriasPrimas,
} from "./handlers/MateriaPrima";

import {
  editarTostados,
  eliminarTostados,
  Todoslostostados,
  
  Tostadero,
  
  TostadosPorId,
} from "./handlers/Trazabilidad/Tostadero";
import { iniciarTrazabilidad, verTrazabilidades } from "./handlers/Trazabilidad/Trazabilidad";
import crearReposo, {
  editarreposo,
  eliminarreposo,
  verreposoPorId,
  verReposos,
} from "./handlers/Trazabilidad/Reposo";
import {
  crearAnalisis,
  editarAnalisis,
  eliminarAnalisis,
  verAnalisis,
} from "./handlers/Trazabilidad/Analisis";
import { crearEmbalaje } from "./handlers/Trazabilidad/Embalaje";
// Importa el controlador

const router = Router();

// Rutas para Materia Prima
router.post("/", nuevaMateriaPrima);
router.get("/", verMateriasPrimas);
router.get("/:id", verMateriaPorId);
router.put("/:id", editarMateriaPrima);
router.delete("/:id", eliminarMateriaPrima);

// Ruta para iniciar el proceso de trazabilidad
router.post("/trazabilidad", iniciarTrazabilidad);
router.get("/trazabilidad/vertodos",verTrazabilidades)

router.post("/trazabilidad/tostadero/:id", Tostadero);
router.get("/trazabilidad/tostadero/", Todoslostostados);
router.get("/trazabilidad/tostadero/:id", TostadosPorId);
router.put("/trazabilidad/tostadero/:id", editarTostados);
router.delete("/trazabilidad/tostadero/:id", eliminarTostados);

//REPOSO

router.post("/trazabilidad/reposo/:id", crearReposo);
router.get("/trazabilidad/reposo", verReposos);
router.get("/trazabilidad/reposo/:id", verreposoPorId);
router.put("/trazabilidad/reposo/:id", editarreposo);
router.delete("/trazabilidad/reposo/:id", eliminarreposo);

//Analisis

router.post("/trazabilidad/analisis", crearAnalisis);
router.get("/trazabilidad/analisis", verAnalisis);
router.get("/trazabilidad/analisis/:id", verMateriaPorId);
router.put("/trazabilidad/analisis/:id", editarAnalisis);
router.delete("/trazabilidad/analisis/:id", eliminarAnalisis);


//Embalaje by Pantera

router.post("/trazabilidad/embalaje",crearEmbalaje)

export default router;
