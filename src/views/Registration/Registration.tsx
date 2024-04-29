import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, } from 'react-native';
import { colors } from '@theme';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackProps } from '@navigator';
import { isWeb } from '@utils/deviceInfo';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: isWeb ? 40 : StatusBar.currentHeight! + 15,
  },
  content: {

    justifyContent: 'flex-end',
  },
  text: {
    color: colors.white
  },
  header: {
    marginTop: isWeb ? 20 : StatusBar.currentHeight! + 15,
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 23,
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: "700",
  },
  headerText1: {
    color: colors.white,
  },
});

export default function Registration({ navigation }: StackProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState<string>('');
  const [showpassword, setShowPassword] = useState(false)
  const { t } = useTranslation(["common"]);


  return (
    <WebView source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />
  );
}
