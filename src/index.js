import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Person from './Person';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Person /> , document.getElementById('root'));


serviceWorker.unregister();
