import {
  combineReducers,
  configureStore as configureToolkitStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameSlice from './game/gameSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  game: gameSlice,
});

const reducer = persistReducer(persistConfig, rootReducer);

function configureStore() {
  const store = configureToolkitStore({
    reducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  const persistor = persistStore(store);

  return { store, persistor };
}

export type ApplicationState = ReturnType<typeof rootReducer>;

export const { store, persistor } = configureStore();
