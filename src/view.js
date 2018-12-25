import { getTodos, toggleTodo, removeTodo } from './todo'
import { getFilteredTodos } from './filter'


const generateSummaryDOM = (todos) => {
    const summaryEl = document.createElement('h2')
    const todoLength = todos.filter((todo) => !todo.completed ).length

    summaryEl.classList.add('list-title')
    const plural =  todoLength > 1 ? 's' : ''
    summaryEl.textContent = `You have ${todoLength} todo${plural} left`
    
    return summaryEl
}


const generateTodoDOM = (todo) => {

    const todoEl = document.createElement('label')
    todoEl.classList.add('list-item')

    //Setup container
    const containerEl = document.createElement('div')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup check
    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    checkEl.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderTodos()
    })
    containerEl.appendChild(checkEl)

    // Setup text
    const textEl = document.createElement('span')
    textEl.textContent = todo.text
    containerEl.appendChild(textEl)

    // Setup remove button
    const removeEl = document.createElement('button')
    removeEl.classList.add('button', 'button--text')
    removeEl.textContent = 'remove'
    removeEl.addEventListener('click', (e) => {
        removeTodo(todo.id)
        renderTodos()
    })
    todoEl.appendChild(removeEl)


    return todoEl
}

const generateEmptyMessageEl = () => {
    const emptyMessageEl = document.createElement('p')
    emptyMessageEl.classList.add('empty-message')
    emptyMessageEl.textContent = 'There are no to-do to show'
    return emptyMessageEl
}

const renderTodos = () => {
    const todosEl = document.querySelector('#todos')
    todosEl.innerHTML = ''

    const todos = getTodos()

    // Setup summary 
    todosEl.appendChild(generateSummaryDOM(todos))

    // Setup todo list
    if (todos.length > 0) {
        getFilteredTodos(todos).forEach((todo) => {
            todosEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        todosEl.appendChild(generateEmptyMessageEl())
    }
}


export { generateSummaryDOM, generateTodoDOM, renderTodos }