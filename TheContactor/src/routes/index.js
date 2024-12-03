import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from '../views/ContactList';
import addContact from '../views/addContact'

const Stack = createStackNavigator();

const Routes = () => (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="addContact" component={addContact} />
      </Stack.Navigator>
    </NavigationContainer>
);
export default Routes;


