export interface PhotoParams {
  createdAt: string;
  _id: string;
  key: string;
  name: string;
  url: string;
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
