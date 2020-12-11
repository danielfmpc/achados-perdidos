import Router from 'express';
import { getRepository } from 'typeorm';
import Item from '../models/Item';
import ItensCreateService from '../services/ItensCreateService';

const itensRouter = Router();

itensRouter.get('/', async (request, response) => {
  const itensRepostiory = getRepository(Item);
  const item = await itensRepostiory.find();
  return response.json(item);
});

itensRouter.post('/', async (request, response) => {
  try {
    const { name, description, sector } = request.body;

    const createItem = new ItensCreateService();
    const item = await createItem.execute({
      description,
      name,
      sector,
    });

    return response.json(item);
  } catch (error) {
    return response.status(400).json(error.message);
  }
});

export default itensRouter;
