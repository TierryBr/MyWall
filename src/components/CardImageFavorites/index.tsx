import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import convertDateToString from '@utils';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function CardImageFavorites({ photo }) {
  const theme = useTheme();
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
    <S.CardImage activeOpacity={0.8} onPress={() => handleOPenPhoto(photo)}>
      <S.Image
        source={{
          uri: `${photo.url}`,
        }}
      >
        <S.InfoPhoto colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}>
          <Icon name="heart-half" color={theme.COLORS.GRAY50} size={25} />
          <S.InfoTextPhoto>{convertDateToString(photo.date)}</S.InfoTextPhoto>
        </S.InfoPhoto>
      </S.Image>
    </S.CardImage>
  );
}
