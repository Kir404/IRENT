import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
//import App from './App';
import ItemPage from './components/pages/ItemPage/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemPage />
  </React.StrictMode>
);

