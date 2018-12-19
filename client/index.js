import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux'
import {globalStore} from './redux/store/store';
render(
   <Provider store={globalStore}>
     <App />
   </Provider>,
document.getElementById('root'),
);
