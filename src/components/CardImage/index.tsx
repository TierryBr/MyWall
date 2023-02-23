import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function CardImage({ photo }) {
  const navigation = useNavigation();

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
    <>
      {photo.empty ? (
        <S.CardImage empty={photo.empty} />
      ) : (
        <S.CardImage
          testID="imageWallpaper"
          activeOpacity={0.8}
          onPress={() => handleOPenPhoto(photo)}
        >
          <S.Image
            source={{
              uri: `${photo.url}`,
              priority: FastImage.priority.normal,
            }}
          />
        </S.CardImage>
      )}
    </>
  );
}
