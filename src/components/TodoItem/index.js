import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../../actions'


const selectTodoById = (state, todoId) => {
  return state.todoReducer.find((todo) => todo.id === todoId)
}

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch(completeTodo(todo.id))
  }

  const onDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <li>
      <div>
        <div className="todo-item">
          <div className="todo-label-container">
            <label className="todo-label" >
            <input
              className="todo-check"
              type="checkbox"
              id="todo-check"
              checked={completed}
              onChange={handleCompletedChanged}
            />
            <label for="todo-check" className="todo-item-text">text</label>
            <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <button className="delete-button">delete</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TodoItem