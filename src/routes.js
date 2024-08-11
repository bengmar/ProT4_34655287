import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router();

router.get('/libros', libro.getAll);
router.get('/libros/:id', libro.getOne);
router.post('/libros/insertar', libro.add);
router.delete('/libros/eliminar/:isbn',libro.delete);
router.put('/libros/editar', libro.update);

