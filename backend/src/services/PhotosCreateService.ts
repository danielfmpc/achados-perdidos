import { getRepository } from 'typeorm';
import Photo from '../models/Photo';

interface Request {
  photo: string;
  item_id: string;
}

class PhotosCreateService {
  public async execute({ photo, item_id }: Request): Promise<Photo> {
    const photosRepository = getRepository(Photo);

    const photoCreated = photosRepository.create({
      photo,
      item_id,
    });

    await photosRepository.save(photoCreated);
    return photoCreated;
  }
}

export default PhotosCreateService;
