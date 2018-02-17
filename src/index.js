import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Layout />
    </Router>
, document.getElementById('root'));

registerServiceWorker();
