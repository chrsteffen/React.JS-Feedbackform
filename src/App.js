import React, { Component } from 'react';
import './App.css';
import FeedbackForm from './FeedbackForm';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <FeedbackForm name="feedback" />

      </div>
    );
  }
}

export default App;
