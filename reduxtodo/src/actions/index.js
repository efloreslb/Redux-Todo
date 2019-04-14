export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = todo => {
   return {
      type: ADD_TODO,
      newTodo: todo
   }
}

export const toggleTodo = index => {
   return {
      type: TOGGLE_TODO,
      payload: index
   }
}

export const deleteTodo = index => {
   return {
      type: DELETE_TODO,
      payload: index
   }
}

export const clearCompleted = () => {
   return {
      type: CLEAR_COMPLETED
   }
}