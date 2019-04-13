import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

import Todo from './Todo';

class TodoList extends Component {
   state = {
      value: '',
      completed: false
   }

   handleChange = e => {
      this.setState({value: e.target.value})
   }

   addTodo = e => {
      e.preventDefault();
      this.props.addTodo(this.state)
   }

   toggleTodo = todo => {
      this.props.toggleTodo(this.state)
   }

   render() {
      return (
         <div>
            <form>
               <input onChange={this.handleChange} placeholder="Enter a task"></input>
               <button onClick={this.addTodo}>Add Todo</button>
            </form>

            <div className="todoList">
               {this.props.todos.map(todo => (
                  <Todo todo={todo} key={todo} onClick={this.toggleTodo}/>
               ))}
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      todos: state.todos
   }
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(TodoList);