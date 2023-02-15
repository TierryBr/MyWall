import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import FastImage from 'react-native-fast-image';

import { useTheme } from 'styled-components/native';
import { Button, Dialog, Portal, List, Snackbar } from 'react-native-paper';
import ManageWallpaper, { TYPE } from '@tierrybr/react-native-manage-wallpaper';
import ReactNativeBlobUtil from 'react-native-blob-util';

import * as S from './styles';
import { PhotoParams } from '@types/navigation';
import { requestWriteExternalStorage } from '@utils/permissions';
import { Header } from '@components/Header';

export function Details() {
  const [visible, setVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [msgDownload, setMsgDownload] = useState('');
  const [value, setValue] = useState(1);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const navigation = useNavigation();
  const { t } = useTranslation();
  const theme = useTheme();
  const route = useRoute();
  const photo = route.params as PhotoParams;

  function setWallpaper(type: string) {
    ManageWallpaper.setWallpaper(
      {
        uri: `${photo.url}`,
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
      setMsgDownload(t('screens:content.permission-denied'));
      setSnackbarVisible(true);
      return navigation.goBack();
    }
    const basePath = ReactNativeBlobUtil.fs.dirs.DownloadDir;

    const fileExists = await ReactNativeBlobUtil.fs.exists(
      `${basePath}/${photo.name}`,
    );

    if (!fileExists) {
      setValue(1);
      await ReactNativeBlobUtil.config({
        path: `${basePath}/${photo.name}`,
        fileCache: true,
      })
        .fetch('GET', `${photo.url}`)
        .then(async res => {
          await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
            {
              name: `${photo.name}`,
              parentFolder: 'MyWall',
              mimeType: 'image/*',
            },
            'Download',
            `${res.path()}`,
          )
            .then(async () => {
              setMsgDownload(t('screens:content.success-download'));
              setSnackbarVisible(true);
            })
            .catch(() => {
              setMsgDownload(t('screens:content.error-download'));
              setSnackbarVisible(true);
            });
        });
    } else {
      setValue(value + 1);
      await ReactNativeBlobUtil.config({
        path: `${basePath}/(${value}) ${photo.name}`,
        fileCache: true,
      })
        .fetch('GET', `${photo.url}`)
        .then(async res => {
          await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
            {
              name: `(${value}) ${photo.name}`,
              parentFolder: 'MyWall',
              mimeType: 'image/*',
            },
            'Download',
            `${res.path()}`,
          )
            .then(async () => {
              await ReactNativeBlobUtil.fs.unlink(res.path());

              setMsgDownload(t('screens:content.success-download'));
              setSnackbarVisible(true);
            })
            .catch(() => {
              setMsgDownload(t('screens:content.error-download'));
              setSnackbarVisible(true);
            })
            .finally(async () => {
              await ReactNativeBlobUtil.fs.unlink(
                `${basePath}/(${value}) ${photo.name}`,
              );
            });
        });
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.Image
          source={{
            uri: `${photo.url}`,
            priority: FastImage.priority.high,
          }}
        />
        <Header photo={photo} />
      </S.Content>
      <S.Buttons>
        <S.ButtonDownload mode="outlined" onPress={downloadWallpaper}>
          <S.TextButtonDownload>
            {t('screens:content.download')}
          </S.TextButtonDownload>
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
            {t('screens:content.apply')}
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
          label: t('screens:content.close'),
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
              {t('screens:content.set-wallpaper')}
            </Dialog.Title>
            <Dialog.Content>
              <List.Section>
                <List.Item
                  title={t('screens:content.home-screen')}
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.HOME)}
                />
                <List.Item
                  title={t('screens:content.lock-screen')}
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.LOCK)}
                />
                <List.Item
                  title={t('screens:content.home-lock-screen')}
                  titleStyle={{ color: theme.COLORS.DARK }}
                  rippleColor={theme.COLORS.OVERLAY}
                  onPress={() => setWallpaper(TYPE.BOTH)}
                />
              </List.Section>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>
                <Text style={{ color: theme.COLORS.DARK }}>
                  {t('screens:content.close')}
                </Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </S.Container>
  );
}
