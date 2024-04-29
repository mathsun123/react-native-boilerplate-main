import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList, StackProps } from './Stack.typeDefs';
import { DrawerProps } from '../drawer/Drawer.typeDefs';
import { StackHeaderLeft, StackHeaderTitle } from './components';
import { colors } from '@theme';

// views
import Home from '@views/Home';
import Details from '@views/Details';
import Profile from '@views/Profile';
import { SafeAreaView, Text, View } from 'react-native';
import ProductLayoutScreen from '@views/Home/ProductLayoutScreen';
import ProductDetailsScreen from '@views/Home/ProductDetailsScreen';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import AppHeader from '@components/AppHeader/AppHeader';

const Stack = createNativeStackNavigator<StackParamList>();

const navigationProps = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.white, },
  headerTitleStyle: { fontSize: 18 },
  ScreenStackHeaderBackButtonImage
};

export function ProductStackNavigator({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={navigationProps}>
        <Stack.Screen
          name="ProductLayoutScreen"
          component={ProductLayoutScreen}
          options={({ route }: any) => ({
            headerShown: false, // Show/hide header based on route param

            // headerTitle: () => <AppHeader title={'PRODUCT'} menu right={'search'} />,


          })}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            headerShown: false, // Hide header for ProductDetailsScreen
            headerTransparent: true,
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

export function HomeStackNavigator({ navigation }: StackProps) {
  return (
    <View style={{ backgroundColor: colors.black, flex: 1 }}>
      <Stack.Navigator screenOptions={navigationProps}>
        <Stack.Screen
          component={Home}
          name="HomeStack"
          options={{
            title: 'Home',
            // headerTitle: () => <StackHeaderTitle />,
            // headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          component={Details}
          name="DetailsStack"
          options={{
            title: 'Details',
            // headerTitle: () => <StackHeaderTitle />,
            header: () => <View><Text>Helo world</Text></View>,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

export function ProfileStackNavigator({ navigation }: StackProps) {
  return (
    <Stack.Navigator screenOptions={navigationProps}>
      <Stack.Screen
        component={Profile}
        name="ProfileStack"
        options={{
          headerShown: false
          // title: 'Profile',
          // headerTitle: () => <StackHeaderTitle />,
          // headerLeft: () => <StackHeaderLeft onPress={() => navigation.toggleDrawer()} />,
          // headerTitleAlign: 'center',
        }}
      />
      {/* <Stack.Screen
        component={Details}
        name="DetailsStack"
        options={{
          title: 'Details',
          headerTitle: () => <StackHeaderTitle />,
          headerTitleAlign: 'center',
        }}
      /> */}
    </Stack.Navigator>
  );
}
