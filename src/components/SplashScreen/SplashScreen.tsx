// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '@theme';


const SplashScreen = ({ navigation }: { navigation: any }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'MainStack' : 'DrawerNavigationRoutes'
        ),
      );
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      {
        <Image
          source={require('../../../assets/images/dragon.gif')}
          style={{ width: '30%', height: '30%', resizeMode: 'contain', }}
        />
      }
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black1,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});