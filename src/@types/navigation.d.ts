export interface PhotoParams {
  createdAt: string;
  _id?: string;
  key: string;
  name: string;
  url: string;
  favorite: boolean;
  date: Date;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Favorites: undefined;
      Settings: undefined;
      Details: PhotoParams;
    }
  }
}
