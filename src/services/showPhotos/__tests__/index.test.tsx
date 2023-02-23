import { api } from '../../api';
import { showService } from '../index';

describe('showPhotos', () => {
  describe('showPhotos', () => {
    test('when API return photos list', async () => {
      const spyFn = jest.spyOn(api, 'get');

      const groupedPhotos = await showService.getPhotos();

      expect(spyFn).toBeCalledTimes(1);
    });
  });
});
