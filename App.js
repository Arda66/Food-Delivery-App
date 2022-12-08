import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Favorites from './src/screens/Favorites';
import Orders from './src/screens/Orders';
import Payment from './src/screens/Payment';
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
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
