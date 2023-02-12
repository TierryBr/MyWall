import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createRows } from '@utils';
import { CardImage } from '@components/CardImage';
import { addPhotos } from '@reducers/photos';

import * as S from './styles';

export function Home() {
  const dispatch = useDispatch();
  const columns = 2;

  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetch(`${process.env.API_URL}`);
      const jsondata = await data.json();
      dispatch(addPhotos(jsondata));
    };

    getImages();
  }, []);

  return (
    <S.Container>
      <FlatList
        data={createRows(listPhotos, columns)}
        renderItem={({ item }) => <CardImage photo={item} />}
        keyExtractor={item => item.key}
        numColumns={columns}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ margin: 50 }}
      />
    </S.Container>
  );
}
