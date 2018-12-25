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

loadTodos()


export { getTodos, saveTodo }
