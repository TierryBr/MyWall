import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { CardImage } from '@components/CardImage';
import { addPhotos, addPhotosEmpty } from '@reducers/photos';

import * as S from './styles';
import { showService } from '../../services/showPhotos';

export function Home() {
  const [request, setRequest] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const columns = 2;

  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  useEffect(() => {
    const getImages = async () => {
      const arrayPhotos = await showService.getPhotos();
      await dispatch(
        addPhotos(
          arrayPhotos?.map((file, index) => ({
            createdAt: file.CreatedAt,
            key: file.key,
            name: file.name,
            url: file.url,
            favorite: listPhotos[index]?.favorite ? true : false,
            date: new Date(),
          })),
        ),
      );
      setRequest(true);
      setIsFetching(false);
    };
    getImages();
  }, [isFetching]);

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data?.length / numColumns);

    let numberOfElementsLastRow = data?.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      dispatch(
        addPhotosEmpty({
          key: `empty-${numberOfElementsLastRow}`,
          empty: true,
        }),
      );
      numberOfElementsLastRow++;
    }

    return listPhotos;
  };

  return (
    <S.Container>
      {request ? (
        <FlatList
          data={formatData(listPhotos, columns)}
          renderItem={({ item }) => <CardImage photo={item} />}
          keyExtractor={item => item.key}
          numColumns={columns}
          onRefresh={() => setIsFetching(true)}
          refreshing={isFetching}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View />}
          ListHeaderComponent={<View />}
          ListFooterComponentStyle={{ margin: 50 }}
          ListHeaderComponentStyle={{ marginTop: 50 }}
          windowSize={40}
        />
      ) : (
        <S.LoadingCenter>
          <ActivityIndicator color={theme.COLORS.DARK} size={30} />
        </S.LoadingCenter>
      )}
    </S.Container>
  );
}
