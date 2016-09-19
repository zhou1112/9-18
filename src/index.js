import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routes';
import  'highlight.js/styles/arduino-light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
// import './main.css';

ReactDOM.render(<Routers />, document.getElementById('app'));
