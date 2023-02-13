import { createSlice } from '@reduxjs/toolkit';
import { PhotoParams } from '@types/navigation';

const photoSlice = createSlice({
  name: 'theme',
  initialState: {
    listPhotos: [] as PhotoParams,
    listPhotosFavorites: [] as PhotoParams,
  },
  reducers: {
    addPhotos: (state, action) => {
      state.listPhotos = action.payload;
    },
    addPhotosEmpty: (state, action) => {
      state.listPhotos = [...state.listPhotos, action.payload];
    },
    addPhotosFavorites: (state, action) => {
      state.listPhotosFavorites = [
        ...state.listPhotosFavorites,
        action.payload,
      ];
    },
    editPhotosFavorites: (state, action) => {
      state.listPhotos = handleEditNewSite(action.payload, state.listPhotos);
    },
  },
});

const handleEditNewSite = (item, photos) => {
  if (item.photo.favorite !== photos[item.photoIndex].favorite) {
    photos[item.photoIndex].favorite = item.photo.favorite;
    return photos;
  } else if (item.photo.favorite === photos[item.photoIndex].favorite) {
    return photos;
  } else {
    photos[item.photoIndex] = item.photo;
    return photos;
  }
};

export const reducerPhotos = photoSlice.reducer;

export const {
  addPhotos,
  addPhotosEmpty,
  addPhotosFavorites,
  editPhotosFavorites,
} = photoSlice.actions;
