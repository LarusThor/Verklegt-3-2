
import Routes from './src/routes/index';
import { Provider as StoreProvider } from 'react-redux';
import reducers from './src/redux/store';


export default function App() {
  return (
    <StoreProvider store={reducers}>
      <Routes/>
    </StoreProvider>
  );
}


