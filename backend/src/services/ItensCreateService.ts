import { getRepository } from 'typeorm';
import Item from '../models/Item';

interface Request {
  name: string;
  description: string;
  sector: string;
}

class ItensCreateService {
  public async execute({ name, description, sector }: Request): Promise<Item> {
    const itensRepository = getRepository(Item);

    const item = itensRepository.create({
      name,
      description,
      sector,
    });

    await itensRepository.save(item);
    return item;
  }
}

export default ItensCreateService;
