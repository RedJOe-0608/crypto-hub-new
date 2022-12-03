import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import 'react-alice-carousel/lib/alice-carousel.css';
import { cryptoApi } from './features/cryptoApi';
import { cryptoNewsApi } from './features/cryptoNewsApi';
const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware,cryptoNewsApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
);

