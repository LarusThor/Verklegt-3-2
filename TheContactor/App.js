import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from './src/views/ContactList'
import { Counter } from './src/components/Counter/counter'
import { Provider as StoreProvider } from 'react-redux';
import reducers from './src/redux/store'

export default function App() {
  return (
    <StoreProvider store={reducers}>
        <ContactList />
    </StoreProvider>
  );
}


