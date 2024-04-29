import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  HomeStack: undefined;
  DetailsStack: { from: string };

  MainStack: undefined;
  ProfileStack: undefined;
  LoginScreen: undefined;
  SplashScreen: undefined;
  Auth: undefined;
  DrawerNavigator: undefined;
  RegisterScreen: undefined;
  GradientBackground: undefined;
  ProductLayoutScreen: undefined;
  ProductDetailsScreen: { id: number, title: string, imageUrl: string };
  LandingPage: undefined;
  LandingStack: undefined;
  // add more screen props...
};

export type StackProps = NativeStackScreenProps<StackParamList, keyof StackParamList>;
