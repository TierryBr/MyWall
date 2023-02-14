import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';
import { Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import * as S from './styles';
import { ModalTheme } from '@components/ModalTheme';

export function Settings() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const { theme: SelectedTheme } = useSelector(
    (state: any) => state.reducerTheme,
  );

  return (
    <S.Container>
      <List.Section style={{ paddingHorizontal: 10 }}>
        <List.Subheader style={{ color: theme.COLORS.DARK }}>
          {t('screens:content.personalization')}
        </List.Subheader>
        <List.Item
          title={t('screens:content.theme')}
          description={
            SelectedTheme === 'themeDark'
              ? t('screens:content.dark')
              : t('screens:content.light')
          }
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
          title={t('screens:content.language')}
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
          {t('screens:content.about')}
        </List.Subheader>
        <List.Item
          title={t('screens:content.version')}
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
          title={t('screens:content.rate-app')}
          description={t('screens:content.rate-app-desc')}
          titleStyle={{ color: theme.COLORS.DARK }}
          descriptionStyle={{ color: theme.COLORS.GRAY500 }}
          rippleColor={theme.COLORS.OVERLAY}
          onPress={() => {}}
          left={() => (
            <Icon name="star-outline" color={theme.COLORS.DARK} size={20} />
          )}
        />
        <List.Item
          title={t('screens:content.terms-of-use')}
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
          title={t('screens:content.privacy-policy')}
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
