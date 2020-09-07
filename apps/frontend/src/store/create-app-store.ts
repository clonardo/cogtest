import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { APP_LS_KEY } from './storage-config';
import { rootReducer } from './root-reducer';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { UserMiddlewareFactory } from './user';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

interface Arg {
  initialState?: Record<string, unknown>;
}

// root persistence cfg
const persistConfig = {
  key: `${APP_LS_KEY}-root`,
  storage,
  blacklist: ['browser', 'toastr'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Function to actually initialize the store
 */
export const createAppStore = ({ initialState }: Arg = {}) => {
  return configureStore({
    preloadedState: initialState,
    // reducer: rootReducer,
    // reducer: rootReducer,
    reducer: persistedReducer as any,

    middleware: (getDefaultMiddleware) => [
      // Included default middlewares: https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware
      ...getDefaultMiddleware({
        /*
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          ignoredPaths: ['dashboard.layout'],
        },
        */
        serializableCheck: false,
        immutableCheck: false,
      }),
      UserMiddlewareFactory(),
    ],
    // enhancers:
    devTools: __DEV__,
    enhancers: [responsiveStoreEnhancer],
  });
};
