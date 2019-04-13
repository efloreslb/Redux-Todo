export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = todo => {
   console.log("action", todo);
   return {
      type: ADD_TODO,
      newTodo: todo
   }
}

export const toggleTodo = index => {
   console.log("toggled", index);
   return {
      type: TOGGLE_TODO,
      payload: index
   }
}