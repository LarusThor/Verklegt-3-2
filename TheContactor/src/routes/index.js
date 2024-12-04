import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactList from '../views/ContactList';
import addContact from '../views/addContact'
import ContactInfo from '../views/ContactInfo';

const Stack = createStackNavigator();

const Routes = () => (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="addContact" component={addContact} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
      </Stack.Navigator>
    </NavigationContainer>
);
export default Routes;


