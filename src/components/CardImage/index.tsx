import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function CardImage({ photo }) {
  const navigation = useNavigation();

  if (photo.empty) {
    return <S.CardImage empty={photo.empty} />;
  }

  function handleOPenPhoto({
    createdAt,
    key,
    name,
    url,
    favorite,
    date,
  }: PhotoParams) {
    navigation.navigate('Details', {
      createdAt,
      key,
      name,
      url,
      favorite,
      date,
    });
  }

  return (
    <S.CardImage activeOpacity={0.8} onPress={() => handleOPenPhoto(photo)}>
      <S.Image
        source={{
          uri: `${photo.url}`,
        }}
      />
    </S.CardImage>
  );
}
