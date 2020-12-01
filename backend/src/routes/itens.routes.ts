import Router from 'express';
import ItensCreateService from '../services/ItensCreateService';

const itensRouter = Router();

itensRouter.get('/', async (request, response) => {
  return response.json({ ok: 'ok' });
});

itensRouter.post('/', async (request, response) => {
  const { name, description, photo, sector } = request.body;

  const createItem = new ItensCreateService();
  const item = await createItem.execute({
    description,
    name,
    photo,
    sector,
  });

  return response.json(item);
});

export default itensRouter;
