import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import { IconButton, Button } from 'react-native-paper';

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
          <IconButton
            icon={() => (
              <Icon
                name="chevron-back-outline"
                color={theme.COLORS.GRAY50}
                size={25}
              />
            )}
            iconColor={theme.COLORS.GRAY50}
            size={25}
            onPress={handleGoBack}
          />
          <IconButton
            icon={() => (
              <Icon
                name="heart-outline"
                color={theme.COLORS.GRAY50}
                size={25}
              />
            )}
            iconColor={theme.COLORS.GRAY50}
            size={25}
            onPress={() => {}}
          />
          <IconButton
            icon={() => (
              <Icon
                name="share-outline"
                color={theme.COLORS.GRAY50}
                size={25}
              />
            )}
            iconColor={theme.COLORS.GRAY50}
            size={25}
            onPress={() => {}}
          />
        </S.Header>
      </S.Content>
      <S.Buttons>
        <S.ButtonDownload mode="outlined" onPress={() => {}}>
          <S.TextButtonDownload>Download</S.TextButtonDownload>
        </S.ButtonDownload>
        <S.ButtonDownload
          mode="contained"
          style={{
            backgroundColor: theme.COLORS.DARK,
          }}
          onPress={() => {}}
        >
          <S.TextButtonDownload
            style={{
              color: theme.COLORS.WHITE,
            }}
          >
            Wallpaper
          </S.TextButtonDownload>
        </S.ButtonDownload>
      </S.Buttons>
    </S.Container>
  );
}
