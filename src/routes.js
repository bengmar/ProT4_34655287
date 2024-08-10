import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router();

router.get('/libro/:id', libro.getOne);
router.get('/libros', libro.getAll);
router.post('/insertar', libro.add);
router.delete('/eliminar/:isbn',libro.delete);
router.put('/editar', libro.update);

