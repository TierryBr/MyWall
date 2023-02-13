import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { CardImage } from '@components/CardImage';
import { addPhotos, addPhotosEmpty } from '@reducers/photos';

import * as S from './styles';

export function Home() {
  const [request, setRequest] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const columns = 2;

  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  useEffect(() => {
    const getImages = async () => {
      await fetch(process.env.API_URL)
        .then(async resp => {
          const jsondata = await resp.json();
          dispatch(
            addPhotos(
              jsondata.map((file, index) => ({
                createdAt: file.CreatedAt,
                key: file.key,
                name: file.name,
                url: file.url,
                favorite: listPhotos[index]?.favorite,
                date: new Date(),
              })),
            ),
          );
          setRequest(true);
        })
        .catch(e => {
          console.log('error', e);
        })
        .finally(() => {
          setRequest(true);
          setIsFetching(false);
        });
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
          ListHeaderComponentStyle={{ margin: 10 }}
        />
      ) : (
        <S.LoadingCenter>
          <ActivityIndicator color={theme.COLORS.DARK} size={30} />
        </S.LoadingCenter>
      )}
    </S.Container>
  );
}
