import { getRepository } from 'typeorm';
import Item from '../models/Item';

interface Request {
  name: string;
  description: string;
  photo: string;
  sector: string;
}

class ItensCreateService {
  public async execute({
    name,
    description,
    photo,
    sector,
  }: Request): Promise<Item> {
    const itensRepository = getRepository(Item);

    const item = itensRepository.create({
      description,
      name,
      photo,
      sector,
    });

    await itensRepository.save(item);
    return item;
  }
}

export default ItensCreateService;
