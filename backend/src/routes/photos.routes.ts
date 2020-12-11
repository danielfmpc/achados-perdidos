import Router from 'express';
import { getRepository } from 'typeorm';
import Photo from '../models/Photo';
import PhotosCreateService from '../services/PhotosCreateService';

const photosRouter = Router();

photosRouter.get('/', async (request, response) => {
  const photosRepostiory = getRepository(Photo);
  const photo = await photosRepostiory.find();
  return response.json(photo);
});

photosRouter.post('/', async (request, response) => {
  try {
    const { photo, item_id } = request.body;

    const createPhoto = new PhotosCreateService();

    const photoCreated = await createPhoto.execute({
      photo,
      item_id,
    });

    return response.json(photoCreated);
  } catch (error) {
    return response.status(400).json(error.message);
  }
});

export default photosRouter;
