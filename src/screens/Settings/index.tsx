import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';
import { ModalTheme } from '@components/ModalTheme';

export function Settings() {
  const [visible, setVisible] = useState(false);
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

      <ModalTheme visible={visible} hideModal={hideModal} />
    </S.Container>
  );
}
