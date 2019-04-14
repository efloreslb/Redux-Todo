import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, deleteTodo} from '../actions';

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
      if (this.state.value !== '') {
         this.props.addTodo(this.state);
         this.setState({value: ''})
      } else {
         return;
      }
   }

   toggleTodo = (e, index) => {
      e.preventDefault();
      this.props.toggleTodo(index)
   }

   deleteTodo = (e, index) => {
      e.preventDefault();
      e.stopPropagation();
      this.props.deleteTodo(index)
   }

   render() {
      return (
         <div className="todoList">
            <form>
               <label>Add Task: </label>
               <input onChange={this.handleChange} value={this.state.value} placeholder="Enter a task"></input>
               <button onClick={this.addTodo}>Add</button>
            </form>

            <div className="todoList">
               {this.props.todos.map((todo, index) => (
                  <div 
                     key={index}
                     onClick={e => this.toggleTodo(e, index)} 
                     className={`todo ${todo.completed === true ? 'completed' : '' }`}
                  > 
                     Todo: {todo.value}
                     <button onClick={e => this.deleteTodo(e, index)}>X</button>
                  </div>
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

export default connect(
      mapStateToProps, 
      { addTodo, toggleTodo, deleteTodo }
)(TodoList);