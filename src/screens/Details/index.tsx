import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import { IconButton, Button, Dialog, Portal, List } from 'react-native-paper';
import ManageWallpaper, { TYPE } from '@tierrybr/react-native-manage-wallpaper';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';

export function Details() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const photo = route.params as PhotoParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function setWallpaper(type: string) {
    ManageWallpaper.setWallpaper(
      {
        uri: `${photo.imagem}`,
      },
      res => {
        if (res.status === 'success') {
          hideDialog();
        } else console.log('error', res.msg);
      },
      type,
    );
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
          onPress={showDialog}
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

      <View>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{ backgroundColor: theme.COLORS.GRAY800 }}
          >
            <Dialog.Title style={{ color: theme.COLORS.DARK }}>
              Definir wallpaper
            </Dialog.Title>
            <Dialog.Content>
              <List.Section>
                <List.Item
                  title="Tela inicial"
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.HOME)}
                />
                <List.Item
                  title="Tela de bloqueio"
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.LOCK)}
                />
                <List.Item
                  title="Tela inicial e Tela de bloqueio"
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.BOTH)}
                />
              </List.Section>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>
                <Text style={{ color: theme.COLORS.DARK }}>Fechar</Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </S.Container>
  );
}
