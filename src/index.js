import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme/index';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import Store, {Persistor} from './redux/store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
