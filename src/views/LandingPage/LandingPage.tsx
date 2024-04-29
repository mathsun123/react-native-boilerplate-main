import React, { useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Button, Animated, TouchableOpacity, View, Text, StatusBar, Platform } from 'react-native';
import { colors } from '@theme';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { isWeb } from '@utils/deviceInfo';
import { StackProps } from '@navigator';
import { WebView } from 'react-native-webview';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  footer: {
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  header: {
    marginTop: isWeb ? 20 : StatusBar.currentHeight! + 15,
    marginHorizontal: 10,
  },
  btnContainer: {
    width: '95%',
    marginBottom: 20,
    display: 'flex',
    rowGap: 10,
  },
  createAccBtn: {
    backgroundColor: 'rgb(43 20 63)', // Blue button color
    height: 53,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderColor: colors.white,
    borderWidth: 1
  },
  darkThemeBtnText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  whiteThemeBtnText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: colors.white, // Blue button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    height: 53,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  socialLoginBtn: {
    backgroundColor: colors.white, // Blue button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  appleLoginBtn: {
    backgroundColor: colors.black, // Blue button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  ball: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 50,
    marginRight: 80,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    borderRadius: 15,
  },
  headerText: {
    fontSize: 40,
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: "700",
  },
  headerText1: {
    color: colors.white,
  },
  headerText2: {
    color: colors.white,
  },
  orContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  orText: {
    color: colors.white,

  }
});

export default function LandingPage({ navigation }: StackProps) {

  const scale = useSharedValue(1);

  const rotate = useDerivedValue(() => {
    return `${scale.value * 2}rad`;
  });


  const rotateStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: rotate.value }],
  }));

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(scale.value * 2, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  // const promptGoogle =()=>{
  //   return <WebView
  //     source={{ uri: 'https://accounts.google.com' }}
  //     onMessage={this.onWebViewMessage}
  //   />
  // }

  // const signIn = async () => {
  //   GoogleSignin.configure({
  //     scopes: [],
  //     webClientId: '<FROM DEVELOPER FIREBASE CONSOLE>',
  //     offlineAccess: true
  //   });
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("userinfo", userInfo)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  return (

    <SafeAreaView style={styles.root}>
      {/* <View
        style={{ ...StyleSheet.absoluteFillObject, ...{ backgroundColor: 'rgb(45 5 79)' } }}
      /> */}
      {/* <Animated.Image
        source={require('../../../assets/images/background.png')}
        style={{ ...StyleSheet.absoluteFillObject, ...{ width: '100%', height: '100%' } }}
        blurRadius={55}
      style={styles.productImage}
      sharedTransitionTag={`sharedTagSPECIAL${id}`}
      sharedTransitionStyle={sharedElementTransition}  // doesnt WORK 
      /> */}
      <View style={styles.header}>
        <SafeAreaView style={styles.header}>
          <Text style={{ ...styles.headerText, ...styles.headerText1 }}>When Life</Text>
          <Text style={{ ...styles.headerText, ...styles.headerText2 }}>Give You CS2</Text>
          <Text style={{ ...styles.headerText, ...styles.headerText1 }}>You Spin</Text>
        </SafeAreaView>
      </View>
      <View style={styles.footer} >
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.createAccBtn} onPress={() => { navigation.navigate('RegisterScreen') }}>
            <Text style={styles.darkThemeBtnText}>Create Account </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate('LoginScreen') }}>
            <Text style={styles.whiteThemeBtnText}>Login </Text>
          </TouchableOpacity>
          <View style={styles.orContainer}><Text style={styles.orText}>- or - </Text></View>
          <TouchableOpacity style={styles.socialLoginBtn} onPress={() => { navigation.navigate('RegisterScreen') }}>
            <Text style={styles.whiteThemeBtnText}>Login With Google </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginBtn} onPress={() => { navigation.navigate('RegisterScreen') }}>
            <Text style={styles.whiteThemeBtnText}>Login With Facebook </Text>
          </TouchableOpacity>
          {/* <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn()}
          /> */}
          {
            Platform.OS !== 'ios' &&
            <TouchableOpacity style={styles.appleLoginBtn} onPress={() => { navigation.navigate('RegisterScreen') }}>
              <Text style={styles.darkThemeBtnText}>Login With Apple </Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView >
  );
}
