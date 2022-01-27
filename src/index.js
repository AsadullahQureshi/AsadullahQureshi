import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import prodStore from './redux/product-store';
import Header from './components/Header';



ReactDOM.render(
  <React.StrictMode>
     <Provider store ={prodStore}>
       {/*  <App /> */}
        <Header />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

