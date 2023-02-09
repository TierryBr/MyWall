import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { createRows } from '@utils';

import * as S from './styles';

export function Home() {
  const columns = 2;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imagem:
        'https://mobimg.b-cdn.net/v3/fetch/0f/0faffa5239e20701db8c7de8a72be9b8.jpeg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imagem:
        'https://mobimg.b-cdn.net/v3/fetch/0f/0faffa5239e20701db8c7de8a72be9b8.jpeg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      imagem:
        'https://mobimg.b-cdn.net/v3/fetch/0f/0faffa5239e20701db8c7de8a72be9b8.jpeg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'quarto Item',
      imagem:
        'https://mobimg.b-cdn.net/v3/fetch/0f/0faffa5239e20701db8c7de8a72be9b8.jpeg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7',
      title: 'quinto Item',
      imagem:
        'https://mobimg.b-cdn.net/v3/fetch/0f/0faffa5239e20701db8c7de8a72be9b8.jpeg',
    },
  ];

  const RenderItem = ({ item }) => {
    if (item.empty) {
      return <S.CardImage empty={item.empty} />;
    }

    return (
      <S.CardImage activeOpacity={0.8} onPress={() => {}}>
        <Image
          style={{ width: 160, height: 260 }}
          source={{
            uri: `${item.imagem}`,
          }}
        />
      </S.CardImage>
    );
  };

  return (
    <S.Container>
      <FlatList
        data={createRows(DATA, columns)}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={columns}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{ margin: 50 }}
      />
    </S.Container>
  );
}
