import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './redux/store';
import {Provider }from 'react-redux'
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="REMOVED_CLIENT_IDl.apps.googleusercontent.com">
    <Provider store={store}> 
      <App/>
       </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

