import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from '../actions';

const initialState = {
   todos: [
      {
         value: "First Todo",
         completed: false
      }
   ]
}

export default (state = initialState, action) => {
   switch (action.type) {
      case ADD_TODO:
         return {
            todos: [...state.todos, action.newTodo]
         }
      case TOGGLE_TODO:
         return {
            ...state,
            todos: state.todos.map((todo, index) => 
               action.payload === index ? { ...todo, completed: !todo.completed  } : todo
            )
         }
      case DELETE_TODO:
         return {
            ...state,
            todos: state.todos.filter((todo, index) =>
               action.payload !== index
            )
         }
      case CLEAR_COMPLETED:
         return {
            ...state,
            todos: state.todos.filter(todo => 
               todo.completed === false
            )
         }
      default:
         return state;
   }
}