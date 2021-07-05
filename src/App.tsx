import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { i18n } from './locale';
import { RootNavigator } from './navigation';
import { store, persistor } from 'src/store/store';

//Welcome in my demo! For more project's information check the README ! :)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <RootNavigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
