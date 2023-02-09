import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export function CardImage({ item }) {
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
}
