import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components/native';
import {
  IconButton,
  Button,
  Dialog,
  Portal,
  List,
  Snackbar,
} from 'react-native-paper';
import ManageWallpaper, { TYPE } from '@tierrybr/react-native-manage-wallpaper';
import ReactNativeBlobUtil from 'react-native-blob-util';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';
import { requestWriteExternalStorage } from '@utils/permissions';

export function Details() {
  const [visible, setVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [msgDownload, setMsgDownload] = useState('');
  const [value, setValue] = useState(1);

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

  async function downloadWallpaper() {
    const hasPermission = await requestWriteExternalStorage();
    if (!hasPermission) {
      setMsgDownload('Permissão negada!');
      setSnackbarVisible(true);
      return navigation.goBack();
    }
    const basePath = ReactNativeBlobUtil.fs.dirs.DownloadDir;

    const fileExists = await ReactNativeBlobUtil.fs.exists(
      `${basePath}/${photo.title}`,
    );

    if (!fileExists) {
      setValue(1);
      await ReactNativeBlobUtil.config({
        path: `${basePath}/${photo.title}`,
        fileCache: true,
      })
        .fetch('GET', `${photo.imagem}`)
        .then(async res => {
          await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
            {
              name: `${photo.title}`,
              parentFolder: 'MyWall',
              mimeType: 'image/*',
            },
            'Download',
            `${res.path()}`,
          )
            .then(async () => {
              setMsgDownload('Download concluído!');
              setSnackbarVisible(true);
            })
            .catch(() => {
              setMsgDownload('Erro ao realizar download!');
              setSnackbarVisible(true);
            });
        });
    } else {
      setValue(value + 1);
      await ReactNativeBlobUtil.config({
        path: `${basePath}/${value + photo.title}`,
        fileCache: true,
      })
        .fetch('GET', `${photo.imagem}`)
        .then(async res => {
          await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
            {
              name: `${value + photo.title}`,
              parentFolder: 'MyWall',
              mimeType: 'image/*',
            },
            'Download',
            `${res.path()}`,
          )
            .then(async () => {
              await ReactNativeBlobUtil.fs.unlink(res.path());
              setMsgDownload('Download concluído!');
              setSnackbarVisible(true);
            })
            .catch(() => {
              setMsgDownload('Erro ao realizar download!');
              setSnackbarVisible(true);
            });
        });
    }
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
        <S.ButtonDownload mode="outlined" onPress={downloadWallpaper}>
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

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() =>
          setTimeout(() => {
            setSnackbarVisible(false);
          }, 3000)
        }
        duration={2000}
        action={{
          label: 'Fechar',
          labelStyle: { color: '#FFF' },
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {msgDownload}
      </Snackbar>

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
