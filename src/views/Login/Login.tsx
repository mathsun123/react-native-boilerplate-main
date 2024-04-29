import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, Image, SafeAreaView, useWindowDimensions } from 'react-native';
import { colors } from '@theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { loadImages, loadFonts } from '@theme';
import { useTranslation } from 'react-i18next';
import { IUser, useAppService, useAppSlice } from '@modules/app';
import { DataPersistKeys, useDataPersist } from '@hooks';
import { isWeb } from '@utils/deviceInfo';
import { AntDesign } from '@expo/vector-icons';
import { Button, IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  header: {
    marginTop: isWeb ? 60 : StatusBar.currentHeight! + 50,
  },
  headerText: {
    fontSize: 40, display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: "700",
    // textShadowOffset: { width: 5, height: 5 },
    // textShadowRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText1: {
    color: colors.lightGrayPurple,
  },
  headerText2: {
    color: colors.black,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGrayPurple, // White border color
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: colors.black1, // White text color
    backgroundColor: colors.lightGrayPurple,
  },
  container: {
    flex: 1,
    marginTop: 20,
    padding: 12
  },
  chevronRightBtnWrapper: {
    marginBottom: 30,
    alignContent: 'flex-end',
    alignItems: 'flex-end',

  },
  chevronRightBtn: {
    backgroundColor: colors.transparent, // Blue button color
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  signupText: {
    color: colors.white
  },
  signupButtonText: {
    color: colors.pink

  }
});

export default function Login({ navigation }: any) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState<string>('');
  const [showpassword, setShowPassword] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false);
  const { getUser } = useAppService();
  const { dispatch, checked, loggedIn, setUser, setLoggedIn } = useAppSlice();
  const { setPersistData, getPersistData } = useDataPersist();
  const [isOpen, setOpen] = useState(true);
  const { t } = useTranslation(["common"]);

  const preload = async () => {
    try {
      // preload assets
      await Promise.all([loadImages(), loadFonts()]);

      // fetch user data (fake promise function to simulate async function)
      const user = await getUser();

      // store user data to redux
      dispatch(setUser(user));
      dispatch(setLoggedIn(!!user));
      console.log(!!user)
      // store user data to persistent storage (async storage)
      console.log(user)
      if (user) setPersistData<IUser>(DataPersistKeys.USER, user);

      // hide splash screen
      SplashScreen.hideAsync();
    } catch (err) {
      console.log('[##] preload error:', err);

      // if preload failed, try to get user data from persistent storage
      getPersistData<IUser>(DataPersistKeys.USER)
        .then(user => {
          console.log(user)
          if (user) {
            dispatch(setUser(user));
            dispatch(setLoggedIn(!!user));
          }
        })
        .finally(() => {
          // hide splash screen
          // SplashScreen.hideAsync();
        });
    }
  };
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* <Image
          style={styles.background}
          source={require('../../../assets/images/bg.jpg')}
          onLoad={handleImageLoad}
        /> */}
      <SafeAreaView style={styles.header}>
        <Text style={{ ...styles.headerText, ...styles.headerText1 }}>Login?</Text>
        {/* <Text style={{ ...styles.headerText, ...styles.z */}
      </SafeAreaView>


      <View style={styles.container}>
        <TextInput
          editable
          style={styles.input}
          numberOfLines={4}
          maxLength={40}
          onChangeText={setUsername}
          value={username}
          placeholder='Email or username'
          placeholderTextColor={colors.gray}
        />
        <View>
          <TextInput
            editable
            style={styles.input}
            numberOfLines={4}
            maxLength={40}
            onChangeText={setPassword}
            value={password}
            textContentType='password'
            placeholder='Password'
            placeholderTextColor={colors.gray}
            secureTextEntry={true}
          />
          <TouchableOpacity></TouchableOpacity>
        </View>

        {/* <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.signupButtonText} onPress={() => navigation.navigate('RegisterScreen')}>{t("loginView.signUp")}</Text>
            </TouchableOpacity>
        </View> */}
        {/* <LanguageSelector /> */}

      </View>
      <View style={styles.chevronRightBtnWrapper}>
        {/* <TouchableOpacity style={styles.button} onPress={preload}>
            <Text style={styles.buttonText}>{'>'}</Text>
          </TouchableOpacity> */}
        <IconButton
          selected
          icon="chevron-right"
          mode="outlined"
          style={{ backgroundColor: colors.transparent }}
          size={48} onPress={preload}
        />
        {/* <Button icon="chevron-right" onPress={preload} style={styles.chevronRightBtn} labelStyle={{ fontSize: 55, color: colors.white }}>
          <Text style={{ display: 'none' }}></Text>
        </Button> */}
        {/* <AntDesign name="right" size={24} color={colors.white} /> */}
      </View>
    </SafeAreaView >
  );
}
