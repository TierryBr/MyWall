export interface Photo {
  createdAt: string;
  _id?: string;
  key: string;
  name: string;
  url: string;
  favorite: boolean;
  date: Date;
}

export interface GroupedPhotos {
  photos: Array<Photo>;
}