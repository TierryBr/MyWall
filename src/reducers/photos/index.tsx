import { createSlice } from '@reduxjs/toolkit';
import { PhotoParams } from '@types/navigation';

const photoSlice = createSlice({
  name: 'theme',
  initialState: {
    listPhotos: [] as PhotoParams,
  },
  reducers: {
    addPhotos: (state, action) => {
      state.listPhotos = action.payload;
    },
    addPhotosEmpty: (state, action) => {
      state.listPhotos = [...state.listPhotos, action.payload];
    },
  },
});

export const reducerPhotos = photoSlice.reducer;

export const { addPhotos, addPhotosEmpty } = photoSlice.actions;
