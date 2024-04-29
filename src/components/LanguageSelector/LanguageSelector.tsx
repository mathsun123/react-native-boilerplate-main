import { colors } from '@theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const styles = StyleSheet.create({
    button: {
      color: colors.white
    },
  });

  return (
    <View>
      <TouchableOpacity onPress={() => changeLanguage('en')} ><Text style={styles.button}>EN</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => changeLanguage('cn')}><Text style={styles.button}>CN</Text></TouchableOpacity>
    </View>
  );
};

export default LanguageSelector;