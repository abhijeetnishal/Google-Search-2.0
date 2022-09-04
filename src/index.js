import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
//importing components
import './index.css'
import App from './App'
//functional component
import { ResultContextProvider } from './contexts/ResultContextProvider'
import './index.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
    < ResultContextProvider >
    <Router>
        <App />
    </Router>
    </ResultContextProvider >
, rootElement);
//connect our entire application and html with id=root
