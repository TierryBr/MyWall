import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { Button, Dialog, Portal, RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { changeTheme } from '../../reducers/themes';

export function ModalTheme({ visible, hideModal }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t } = useTranslation();

  const { theme: SelectedTheme } = useSelector(
    (state: any) => state.reducerTheme,
  );

  return (
    <View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideModal}
          style={{ backgroundColor: theme.COLORS.GRAY800 }}
        >
          <Dialog.Title style={{ color: theme.COLORS.DARK }}>
            {t('screens:content.theme')}
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
  );
}
