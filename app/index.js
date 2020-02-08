import React from 'react';
import ReactDOM from 'react-dom';

import EnrollmentUpload from './enrollmentUpload/index.jsx';
import PaymentUpload from './paymentUpload/index.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

    