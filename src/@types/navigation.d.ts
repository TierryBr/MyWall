export interface PhotoParams {
  id: string;
  title: string;
  imagem: string;
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
