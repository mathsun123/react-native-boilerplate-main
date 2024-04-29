import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Button from '@components/Button';
import { StackProps } from '@navigator/stack';
import { colors } from '@theme';
import { windowWidth } from '@utils/deviceInfo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppSlice } from '@modules/app';
import GradientButton from '@components/GradientButton';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: colors.transparent,
    // color: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    backgroundColor: colors.lightPurple,
    height: 44,
    width: '50%',
  },
});

export default function Home({ navigation }: StackProps) {
  const { dispatch, setLoggedOut } = useAppSlice();

  return (
    <View style={styles.root}>
      {/* <StatusBar barStyle="light-content" />
      <View><TouchableOpacity onPress={() => dispatch(setLoggedOut())}><Text>LogOut</Text></TouchableOpacity></View>
      <GradientButton
        title="Go to Details ??"
        titleStyle={styles.buttonTitle}
        style={styles.button}
        gradientBackgroundProps={{
          colors: [colors.purple, colors.pink],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
        onPress={() => navigation.navigate('DetailsStack', { from: 'Home' })}
      /> */}
      {/* <ProductLayout /> */}
    </View>
  );
}
