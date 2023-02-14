import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components/native';
import { Button, Dialog, Portal, RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

export function ModalLanguage({ visible, hideModal }) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = value => {
    i18n.changeLanguage(value);
    AsyncStorage.setItem('@lang', value);
  };

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
                if (value === 'en-US') {
                  changeLanguage('en-US');
                } else if (value === 'es-ES') {
                  changeLanguage('es-ES');
                } else changeLanguage('pt_BR');
              }}
              value={i18n.language}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="pt_BR"
                  color={theme.COLORS.DARK}
                  uncheckedColor={theme.COLORS.GRAY500}
                />
                <Text style={{ color: theme.COLORS.DARK }}>Português</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="en-US"
                  color={theme.COLORS.DARK}
                  uncheckedColor={theme.COLORS.GRAY500}
                />
                <Text style={{ color: theme.COLORS.DARK }}>Inglês</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="es-ES"
                  color={theme.COLORS.DARK}
                  uncheckedColor={theme.COLORS.GRAY500}
                />
                <Text style={{ color: theme.COLORS.DARK }}>Espanhol</Text>
              </View>
            </RadioButton.Group>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideModal}>
              <Text style={{ color: theme.COLORS.DARK }}>
                {t('screens:content.close')}
              </Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
