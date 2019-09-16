import React from 'react';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';
import LandingScreen from './Auth/landing';
import LoginScreen from './Auth/login';
import RegisterScreen from './Auth/register';
import Camera from './Auth/camera';

const RootStack = createStackNavigator(
    {
        Login: LoginScreen,
        Landing:LandingScreen,
        Register:RegisterScreen,
        Camera:Camera
    },
    {
        initialRouteName: 'Landing',
        transitionConfig: () => fromLeft(1400),
    }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;