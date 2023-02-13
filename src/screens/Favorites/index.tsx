import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotosEmpty } from '@reducers/photos';

import { CardImageFavorites } from '@components/CardImageFavorites';

import * as S from './styles';

export function Favorites() {
  const dispatch = useDispatch();

  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  return (
    <S.Container>
      <FlatList
        data={listPhotos.filter(photo => photo.favorite === true)}
        renderItem={({ item }) => <CardImageFavorites photo={item} />}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListHeaderComponent={<View />}
        ListFooterComponentStyle={{ margin: 50 }}
        ListHeaderComponentStyle={{ margin: 10 }}
      />
    </S.Container>
  );
}
