import { getTodos, saveTodos, createTodo, toggleTodo, removeTodo } from './todo'
import { getFilters, setFilters, getFilteredTodos } from './filter'


const generateSummaryDOM = (todos) => {
    const summaryEl = document.createElement('h2')
    const todoLength = todos.filter((todo) => !todo.completed ).length

    summaryEl.classList.add('list-title')
    const plural =  todoLength > 1 ? 's' : ''
    summaryEl.textContent = `You have ${todoLength} todo${plural} left`
    
    return summaryEl
}


export { generateSummaryDOM }