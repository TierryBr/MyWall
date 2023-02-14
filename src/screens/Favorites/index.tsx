import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { CardImageFavorites } from '@components/CardImageFavorites';
import SvgComponent from '../../assets/WithotFavorite';

import * as S from './styles';
import { useTranslation } from 'react-i18next';

export function Favorites() {
  const { t } = useTranslation();
  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  const favoriteImages = listPhotos.filter(photo => photo.favorite === true);

  return (
    <S.Container>
      <FlatList
        data={favoriteImages}
        renderItem={({ item }) => <CardImageFavorites photo={item} />}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListHeaderComponent={<View />}
        ListFooterComponentStyle={{ margin: 50 }}
        ListHeaderComponentStyle={{ margin: 10 }}
        ListEmptyComponent={
          <S.FavoritesEmpty>
            <SvgComponent />
            <S.TextFavorites>
              {t('screens:content.favorites-empty')}
            </S.TextFavorites>
          </S.FavoritesEmpty>
        }
      />
    </S.Container>
  );
}
