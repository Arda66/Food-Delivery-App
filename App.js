import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Orders from './components/Orders';
const App = () => {
  const Stack = createNativeStackNavigator();
  global.OrdersData = [];
  global.FavoriteData = [];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={Details}
        />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
