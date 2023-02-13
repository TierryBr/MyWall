import React from 'react';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButton } from 'react-native-paper';
import { PhotoParams } from '@types/navigation';
import { addPhotosFavorites, editPhotosFavorites } from '@reducers/photos';

import * as S from './styles';

export function Header({ photo }: PhotoParams) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const theme = useTheme();

  const { listPhotos } = useSelector((state: any) => state.reducerPhotos);

  const onShare = async () => {
    try {
      await Share.share({
        message: photo.url,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const addFavorite = async () => {
    const photoIndex = listPhotos.findIndex(item => item.key === photo.key);
    if (photo.favorite === true) {
      photo.favorite = false;
      photo.date = new Date();
    } else {
      photo.favorite = true;
      photo.date = new Date();
    }

    dispatch(editPhotosFavorites({ photo, photoIndex }));
  };
  return (
    <S.Header
      colors={[
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0.2)',
        'rgba(0,0,0,0.2)',
        'rgba(0,0,0,0)',
      ]}
    >
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
        icon={() =>
          photo.favorite === false ? (
            <Icon name="heart-outline" color={theme.COLORS.GRAY50} size={25} />
          ) : (
            <Icon name="heart" color={theme.COLORS.GRAY50} size={25} />
          )
        }
        iconColor={theme.COLORS.GRAY50}
        size={25}
        onPress={addFavorite}
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
