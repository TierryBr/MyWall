import { SettingsItens } from '@components/SettingsItens';
import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { changeTheme, changeThemeConfigSelected } from '../../reducers/themes';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import {
  Divider,
  List,
  Button,
  Dialog,
  Portal,
  RadioButton,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';

export function Settings() {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { theme: SelectedTheme } = useSelector(
    (state: any) => state.reducerTheme,
  );

  return (
    <S.Container>
      <List.Section style={{ paddingHorizontal: 10 }}>
        <List.Subheader style={{ color: theme.COLORS.DARK }}>
          Personalização
        </List.Subheader>
        <List.Item
          title="Tema"
          description={SelectedTheme === 'themeDark' ? 'Escuro' : 'Claro'}
          titleStyle={{ color: theme.COLORS.DARK }}
          descriptionStyle={{ color: theme.COLORS.GRAY500 }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={showModal}
          left={() => (
            <Icon
              name="color-palette-outline"
              color={theme.COLORS.DARK}
              size={20}
            />
          )}
        />
        <List.Item
          title="Idioma"
          description="Português"
          titleStyle={{ color: theme.COLORS.DARK }}
          descriptionStyle={{ color: theme.COLORS.GRAY500 }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={() => {}}
          left={() => (
            <Icon name="language-outline" color={theme.COLORS.DARK} size={20} />
          )}
        />
        <Divider />
        <List.Subheader style={{ color: theme.COLORS.DARK }}>
          Sobre
        </List.Subheader>
        <List.Item
          title="Versão"
          description="1.0.0"
          titleStyle={{ color: theme.COLORS.DARK }}
          descriptionStyle={{ color: theme.COLORS.GRAY500 }}
          rippleColor={theme.COLORS.OVERLAY}
          left={() => (
            <Icon
              name="code-slash-outline"
              color={theme.COLORS.DARK}
              size={20}
            />
          )}
        />
        <List.Item
          title="Classifique o aplicativo"
          description="Se gostou do MyWall avalie ele na PlayStore"
          titleStyle={{ color: theme.COLORS.DARK }}
          descriptionStyle={{ color: theme.COLORS.GRAY500 }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={() => {}}
          left={() => (
            <Icon name="star-outline" color={theme.COLORS.DARK} size={20} />
          )}
        />
        <List.Item
          title="Termos de uso"
          titleStyle={{ color: theme.COLORS.DARK }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={() => {}}
          left={() => (
            <Icon
              name="document-text-outline"
              color={theme.COLORS.DARK}
              size={20}
            />
          )}
        />
        <List.Item
          title="Política de privacidade"
          titleStyle={{ color: theme.COLORS.DARK }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={() => {}}
          left={() => (
            <Icon
              name="document-attach-outline"
              color={theme.COLORS.DARK}
              size={20}
            />
          )}
        />
      </List.Section>

      <View>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideModal}
            style={{ backgroundColor: theme.COLORS.GRAY800 }}
          >
            <Dialog.Title style={{ color: theme.COLORS.DARK }}>
              Tema
            </Dialog.Title>
            <Dialog.Content>
              <RadioButton.Group
                onValueChange={value => {
                  if (value === 'themeLight') {
                    dispatch(changeTheme('themeLight'));
                  } else {
                    dispatch(changeTheme('themeDark'));
                  }
                }}
                value={SelectedTheme}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="themeLight"
                    color={theme.COLORS.DARK}
                    uncheckedColor={theme.COLORS.GRAY500}
                  />
                  <Text style={{ color: theme.COLORS.DARK }}>Claro</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="themeDark"
                    color={theme.COLORS.DARK}
                    uncheckedColor={theme.COLORS.GRAY500}
                  />
                  <Text style={{ color: theme.COLORS.DARK }}>Escuro</Text>
                </View>
              </RadioButton.Group>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideModal}>
                <Text style={{ color: theme.COLORS.DARK }}>Fechar</Text>
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </S.Container>
  );
}
