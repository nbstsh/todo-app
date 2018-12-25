const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted}) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

const getFilteredTodos = (todos) => {
    return todos.filter(({ text, completed }) => {
        const textMatch = text.toLowerCase().includes(filters.searchText.toLowerCase())
        const completedMatch = !filters.hideCompleted || !completed
        return textMatch && completedMatch
    })
} 


export { getFilters, setFilters, getFilteredTodos }
