import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

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

   newToggleTodo = (e, index) => {
      console.log('toggled');
      e.preventDefault();
      this.props.toggleTodo(index)
   }

   render() {
      return (
         <div>
            <form>
               <label>Task: </label>
               <input onChange={this.handleChange} placeholder="Enter a task"></input>
               <button onClick={this.addTodo}>Add Todo</button>
            </form>

            <div className="todoList">
               {this.props.todos.map((todo, index) => (
                  <div 
                     key={index}
                     onClick={e => this.newToggleTodo(e, index)} 
                     className={`todo ${todo.completed === true ? 'completed' : '' }`}
                  > 
                     Todo: {todo.value}
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
      { addTodo, toggleTodo }
)(TodoList);