import Router from 'express';
import itensRouter from './itens.routes';
import photosRouter from './photos.routes';

const routes = Router();

routes.use('/itens', itensRouter);
routes.use('/photos', photosRouter);

export default routes;
