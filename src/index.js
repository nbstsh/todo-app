import { getTodos, loadTodos, saveTodos, createTodo, toggleTodo, removeTodo } from './todo'
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

// add todo
document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault()

    const text = e.target.elements.addTodo.value.trim()
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
    }

    e.target.elements.addTodo.value = ''
})

// local storage watcher
window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})