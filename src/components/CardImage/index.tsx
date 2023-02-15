import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';
import { Text } from 'react-native';

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
      <FastImage
        style={{ width: 160, height: 260 }}
        source={{
          uri: `${photo.url}`,
          priority: FastImage.priority.normal,
        }}
      />
    </S.CardImage>
  );
}
