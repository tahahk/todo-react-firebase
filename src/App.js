import React, { Component } from 'react';
// import logo from './logo.svg';
import Todo from './Todo.js';
import './App.css';
import * as firebase from 'firebase';

var fb = firebase.initializeApp({
  apiKey: "AIzaSyBJZA3oZlTKWcjpln_nmNHukiaGo0qE1Vw",
  authDomain: "react-todo-2c60d.firebaseapp.com",
  databaseURL: "https://react-todo-2c60d.firebaseio.com",
  projectId: "react-todo-2c60d",
  storageBucket: "react-todo-2c60d.appspot.com",
  messagingSenderId: "125357301435"
});

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = { todos: [] };
  }

  addTodo(ev) {
    ev.preventDefault();
    fb.database().ref('todos/').push({ todo: this.refs.todo.value })
      .then((v) => {
        this.refs.todo.value = '';
      })

  }


  render() {
    return (
      <div className="App">

        <br /><br />
        <form onSubmit={this.addTodo}>
          <input type="text" ref='todo' />
          <button>Add Todo</button>
        </form>
        <br /><br />
        <Todo ></Todo>
      </div>
    );
  }
}

export default App;
