import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
      default:
         return state;
   }
}