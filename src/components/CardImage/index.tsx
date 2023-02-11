import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function CardImage({ photo }) {
  const navigation = useNavigation();

  if (photo.empty) {
    return <S.CardImage empty={photo.empty} />;
  }

  function handleOPenPhoto({ id, title, imagem }: PhotoParams) {
    navigation.navigate('Details', { id, title, imagem });
  }

  return (
    <S.CardImage activeOpacity={0.8} onPress={() => handleOPenPhoto(photo)}>
      <S.Image
        source={{
          uri: `${photo.imagem}`,
        }}
      />
    </S.CardImage>
  );
}
