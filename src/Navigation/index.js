import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from '../screens/Authentication/Onboarding';
import ChooseMethod from '../screens/Authentication/ChooseMethod';
import Favorite from '../screens/Favorite';
import MyCart from '../screens/MyCart';
import Explore from '../screens/Explore';
import Refer from '../screens/Refer';
import Profile from '../screens/Profile';



const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="choosemethod" component={ChooseMethod} />
        <Stack.Screen name="favorite" component={Favorite} />
        <Stack.Screen name="mycart" component={MyCart} />
        <Stack.Screen name="explore" component={Explore} />
        <Stack.Screen name="refer" component={Refer} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
