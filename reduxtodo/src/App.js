import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Enter a task"></input>
          <button></button>
        </form>

        <div className="todoList">

        </div>
      </div>
    );
  }
}

export default App;
