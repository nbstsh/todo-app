import uuidv4 from 'uuidv4'

/*

todo object

    {
        id: ,
        text: ,
        completed: ,
    }

*/

let todos = []

const getTodos = () => todos

const loadTodos = () => {
    const todosJson = localStorage.getItem('todos')
    todos = todosJson ? JSON.parse(todosJson) : []
}

const saveTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodo()
}

loadTodos()


export { getTodos, saveTodo, createTodo }

