const initalTodo=[];
const todo =(state=initalTodo,action)=>{
    switch(action.type){
        case 'todo/todoAdded' :
            return [
              ...state,
              {
                
                text: action.text,
                completed: false,
              }
            ];
            case 'todo/todoDeleted' :
                return state.filter(todo=> todo.id !== action.id);
          
              case 'todo/todoCompleted' :
                return state.map(todo=> {
                  if(todo.id === action.id) {
                    return {...todo, completed: !todo.completed}
                  }
                  return todo
                });
}

}
export default todo;