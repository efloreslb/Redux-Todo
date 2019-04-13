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
            todos: [...state.todos, action.payload]
         }
      case TOGGLE_TODO:
         return {

         }
      default:
         return state;
   }
}