import React from 'react';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';
import { PhotoParams } from '@types/navigation';

import * as S from './styles';

export function Header({ photo }: PhotoParams) {
  const navigation = useNavigation();
  const theme = useTheme();

  const onShare = async () => {
    try {
      await Share.share({
        message: photo.url,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
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
        onPress={() => navigation.goBack()}
      />
      <IconButton
        icon={() => (
          <Icon name="heart-outline" color={theme.COLORS.GRAY50} size={25} />
        )}
        iconColor={theme.COLORS.GRAY50}
        size={25}
        onPress={() => {}}
      />
      <IconButton
        icon={() => (
          <Icon name="share-outline" color={theme.COLORS.GRAY50} size={25} />
        )}
        iconColor={theme.COLORS.GRAY50}
        size={25}
        onPress={onShare}
      />
    </S.Header>
  );
}
