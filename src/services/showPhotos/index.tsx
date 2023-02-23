import { GroupedPhotos, Photo } from '../../models/photoModel';
import { api } from '../api';

async function getPhotos(): Promise<GroupedPhotos> {
  const { data } = await api.get<GroupedPhotos>(`posts`);

  return data;
}

export const showService = {
  getPhotos,
};
