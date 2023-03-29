import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reactApp/index.css'
import './fonts/Nordique-Pro-Bold.ttf'
import './fonts/PublicaRegular.ttf'
import App from './App';
import reportWebVitals from './__tests__/reportWebVitals';
import GlobalStyle from './styles/modules/global';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
