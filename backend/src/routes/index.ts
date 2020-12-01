import Router from 'express';
import itensRouter from './itens.routes';

const routes = Router();

routes.use('/itens', itensRouter);

export default routes;
