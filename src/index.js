import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-flags-select/css/react-flags-select.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <App />,
document.getElementById('root'));
registerServiceWorker();
