import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Counter } from './src/components/Counter/counter'
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <View style={styles.container}>
        <Counter />
        <StatusBar style="auto" />
      </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4D7FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
