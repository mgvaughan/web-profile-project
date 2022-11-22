import * as express from 'express';
import pizzaRouter from './pizza';
import contactRouter from './contact'
import usersRouter from './users';

const router = express.Router();

router.use('/pizza', pizzaRouter);
router.use('/contact', contactRouter);
router.use('/users', usersRouter);

export default router;