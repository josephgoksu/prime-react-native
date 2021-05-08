import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  OnboardingScreen,
  Onboarding2Screen,
  HomeScreen,
  AboutScreen,
  GetStartedScreen,
} from './screens';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import RNBootSplash from 'react-native-bootsplash';

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();

  const { hasOnboarded } = useSelector(
    (state: {
      onboard: {
        hasOnboarded: boolean;
      };
    }) => ({
      hasOnboarded: state.onboard.hasOnboarded,
    }),
    shallowEqual,
  );

  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  const MainNavigator = () => (
    <Navigator headerMode="none">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="About" component={AboutScreen} />
    </Navigator>
  );

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const OnboardingNavigator = () => (
    <Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}>
      <Screen name="Onboarding" component={OnboardingScreen} />
      <Screen name="Onboarding2" component={Onboarding2Screen} />
      <Screen name="GetStarted" component={GetStartedScreen} />
    </Navigator>
  );

  return (
    <NavigationContainer>
      {hasOnboarded ? <MainNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
