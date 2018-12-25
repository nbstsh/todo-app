/*

todo object

    {
        id: ,
        text: ,
        completed: ,
    }

*/


const todos = []

const getTodos = () => todos

const saveTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}


export { getTodos, saveTodo }
