import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function Details() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const photo = route.params as PhotoParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Content>
        <S.Image
          source={{
            uri: `${photo.imagem}`,
          }}
        />
        <S.Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon
              name="chevron-back-outline"
              color={theme.COLORS.WHITE}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" color={theme.COLORS.WHITE} size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-outline" color={theme.COLORS.WHITE} size={20} />
          </TouchableOpacity>
        </S.Header>
      </S.Content>
      <S.Buttons>
        <S.ButtonDownload>
          <S.TextButtonDownload>Download</S.TextButtonDownload>
        </S.ButtonDownload>
        <S.ButtonWallpaper>
          <S.TextButtonDownload style={{ color: theme.COLORS.WHITE }}>
            Wallpaper
          </S.TextButtonDownload>
        </S.ButtonWallpaper>
      </S.Buttons>
    </S.Container>
  );
}
