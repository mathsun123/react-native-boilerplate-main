// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import 'react-native-gesture-handler';

// Import React and Component
import React, { useState } from 'react';
import "@expo/metro-runtime";
// Import Screens
import LoginScreen from './src/views/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from '@navigator';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import SplashScreen from '@components/SplashScreen';
import DrawerNavigator from './src/navigator/drawer/Drawer';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import store from '@utils/store';
import { StyleSheet, Text, View } from 'react-native';
import './src/localization/i18n'; // import i18n (needs to be bundled ;)) make it available for all the components.
import Registration from '@views/Registration';
import { colors } from '@theme';
import { DripsyProvider, makeTheme } from 'dripsy'

// import RegisterScreen from './Screen';
const Stack = createNativeStackNavigator<StackParamList>();
import Icon from 'react-native-vector-icons/Ionicons';
import { isWeb } from '@utils/deviceInfo';
import { useAppSlice } from '@modules/app';
import LandingPage from '@views/LandingPage';
import Animated from 'react-native-reanimated';
import { Button, IconButton } from 'react-native-paper';
// import BlurView from '@react-native-community/blur';

const LandingStack = ({ navigation }: any) => {
  // Stack Navigator for Login and Sign up Screen
  const [themeMode, setThemeMode] = useState(colors.white)
  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <View
        style={{ ...StyleSheet.absoluteFillObject, ...{ backgroundColor: 'rgb(45 5 79)' } }}
      />
      {/* <View style={{ position: 'absolute', right: 10, top: 10 }}>
        <Button children="" icon="theme-light-dark" onPress={() => { }} buttonColor='black' labelStyle={{ color: colors.white, borderColor: 'red' }} />
      </View> */}
      <IconButton
        selected
        icon={`theme-light-dark`}
        iconColor={themeMode}
        style={{ backgroundColor: `${themeMode === colors.white ? colors.black : colors.white}` }}
        mode="outlined"
        size={25}
        onPress={() => themeMode === colors.white ? setThemeMode(colors.black) : setThemeMode(colors.white)}
      />

      {/* <Animated.Image
        source={require('./assets/images/background2.png')}
        style={{ ...StyleSheet.absoluteFillObject, ...{ width: '100%', height: '100%', } }}
        blurRadius={66}
      /> */}
      {/* Blur View */}
      {/* Your Navigation Stack */}
      <View style={{ width: '100%', height: '100%' }}>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              headerTitleStyle: {
                color: colors.white,
                fontSize: 25,
              },
              headerLeft: () => (
                <View style={{ paddingRight: 10 }}>
                  <Icon
                    name="arrow-back-sharp"
                    size={30}
                    onPress={() => navigation.goBack()}
                    color="#fff"
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={Registration}
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              headerTitleStyle: {
                color: colors.white,
                fontSize: 25,
              },
              headerLeft: () => (
                <View style={{ paddingRight: 10 }}>
                  <Icon
                    name="arrow-back-sharp"
                    size={30}
                    onPress={() => navigation.goBack()}
                    color="#fff"
                  />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
const MainStack = () => {
  const { dispatch, checked, loggedIn, setUser, setLoggedIn, setLoggedOut } = useAppSlice();
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {
        loggedIn ?
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'fade',
            }}
          />
          :
          <Stack.Screen
            name="LandingStack"
            component={LandingStack}
            options={{ headerShown: false }}
          />
      }

    </Stack.Navigator>
  )
}

const theme = makeTheme({})
const App = () => {
  return (
    <DripsyProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Apply styles to center content */}
          <View style={[styles.contentContainer, isWeb && styles.webContentContainer]}>
            <Provider store={store}>
              <NavigationContainer theme={MyTheme}>
                <Stack.Navigator initialRouteName="SplashScreen">
                  {/* SplashScreen which will come once for 5 Seconds */}
                  <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }}
                  />

                </Stack.Navigator>
              </NavigationContainer>
            </Provider>
          </View>
        </View>
      </GestureHandlerRootView>
    </DripsyProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },
  contentContainer: {
    flex: 1,
    width: '100%',

  },

  webContentContainer: {
    // height: '50vh', // Use full viewport height on web
    // maxWidth: 450, // Optional: Limit width for larger screens
  },
});

export default App;