const addTodo = (Text) =>({type:'todo/addTodo',Text});
const deleteTodo = (id) => ({type: 'todo/todoDeleted', id});
const completeTodo = (id) => ({type: 'todo/todoCompleted', id});
export {addTodo,deleteTodo,completeTodo};