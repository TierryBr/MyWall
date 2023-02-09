import React from 'react';
import { View, FlatList } from 'react-native';
import { createRows } from '@utils';

import * as S from './styles';

export function Home() {
  const columns = 2;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imagem:
        'https://blogdageografia.com/wp-content/uploads/photo-gallery/imported_from_media_libray/lagos-e-montanhas.jpg?bwg=1672061898',
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
        'https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/papel-de-parede-masculino-top-tumblr.png?fit=540%2C810&ssl=1',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'quarto Item',
      imagem:
        'https://1.bp.blogspot.com/-R8-_vTqBVVA/XrQFtHebToI/AAAAAAAAHzM/OaVkFNvF1IMeLpIttSzKMYMVsd_DolHXQCLcBGAsYHQ/s1600/wallpaper%2Bcelular%2Bhora%2Bde%2Baventura%2Badventure%2Btime%2Bbackground%2Bimage%2Bjack%2Bfinn%2Bmarceline%2Bbmo%2Bprincess%2Bbubblegum%2Bcartoon%2Bnetwork%2Banimation%2Btv%2Bshow%2Bdesenho%2Banimado%2Bhq%2B%252819%2529.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7',
      title: 'quinto Item',
      imagem:
        'https://w0.peakpx.com/wallpaper/948/74/HD-wallpaper-planeta-terra-espaco-astronomia.jpg',
    },
  ];

  const RenderItem = ({ item }) => {
    if (item.empty) {
      return <S.CardImage empty={item.empty} />;
    }

    return (
      <S.CardImage activeOpacity={0.8} onPress={() => {}}>
        <S.Image
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
