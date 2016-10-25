import React, { Component } from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

const todos = [
  { id: 0, text: 'Learn Redux' },
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection todos={todos}/>
      </div>
    );
  }
}

export default App;
