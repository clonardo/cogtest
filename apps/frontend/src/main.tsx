import React from 'react';
import ReactDOM from 'react-dom';
import { APP_STORE } from './store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'antd/dist/antd.css';
import { AppLayoutContainer } from './common/layout';
import { Provider } from 'react-redux';
import { CircularLoader } from './common/circular-loader';
import { RouteRegistrations } from './app/route-registrations';
import { HelmetProvider } from 'react-helmet-async';

const persistor = persistStore(APP_STORE);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={APP_STORE}>
        <PersistGate loading={<CircularLoader />} persistor={persistor}>
          <HelmetProvider>
            <BrowserRouter>
              <AppLayoutContainer>
                <RouteRegistrations />
              </AppLayoutContainer>
            </BrowserRouter>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
