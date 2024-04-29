import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@theme';
import { TabParamList, TabBarStatus } from './Tab.typeDefs';
import { HomeStackNavigator, ProfileStackNavigator, ProductStackNavigator } from '../stack/Stack';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case 'HomeTab':
      return <AntDesign name="home" size={24} color={tabStatus.color} />;
    case 'ProfileTab':
      return <AntDesign name="profile" size={24} color={tabStatus.color} />;
    case 'ProductTab':
      return <AntDesign name="table" size={24} color={tabStatus.color} />;
    // add more...
  }
};

export default function TabNavigator() {
  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: renderTabBarIcon(route.name),
          headerShown: false,
          tabBarInactiveTintColor: colors.gray,
          tabBarInactiveBackgroundColor: colors.transparent,
          tabBarActiveTintColor: colors.lightPurple,
          tabBarActiveBackgroundColor: colors.transparent,
        })}>
        <Tab.Screen name="ProductTab" component={ProductStackNavigator} options={{ title: 'Product' }} />
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStackNavigator}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
