import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form } from '@formio/react';

const App = () => {

  return (
    <div className="container">
      <div className="center">
        <Form src="https://utlpboudwbcdozg.form.io/stimmung" />
      </div>
    </div>
  );
}

export default App;
