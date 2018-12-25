import { getTodos, saveTodos, createTodo, toggleTodo, removeTodo } from './todo'
import { getFilters, setFilters, getFilteredTodos } from './filter'
import { generateSummaryDOM, generateTodoDOM, renderTodos } from './view'

renderTodos()

// searchtext filtering
document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({ searchText: e.target.value })
    renderTodos()
})


// hide completed filtering
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({ hideCompleted: e.target.checked })
    renderTodos()
})