import { useState } from "react";

const ToDoList = () => {

    const[todos, setTodos] = useState([])
    const[newTodo, setNewTodo] = useState('')
    const[editing, setEditing] = useState(null)
    const[editedTodo, setEditedTodo] = useState('')


    // Create
    const handleSubmit = (e) =>{
        e.preventDefault()
        const newTodoItem = {
            id:Date.now(), text:newTodo
        }
        setTodos([...todos, newTodoItem])
        setNewTodo('')
    }

    // Read
    const todoList = todos.map((todo) => (
        <div key={{index}}>
            {editing === (index) ? (
                <input type="text" value={editedTodo} onChange={(e) => setEditedTodo(e.target.value)}/> 
            ) : (
                todo.text
            )}
            {editing === (index) ? (
                <button onClick={() => handleUpdate((index))}>Save</button>
            ) : (
                <>
                    <button onClick={() => handleEdit((index))}>Edit</button>
                    <button onClick={() => handleDelete((index))}>Delete</button>
                </>
            )}
        </div>
    ))

    // Update
    const handleEdit = (id) => {
        setEditing(id)
        const editedTodoItem = todos.find((todo) => (index) === id)
        setEditedTodo(editedTodoItem.text)
    }

    const handleUpdate = (id) => {
        setTodos(
            todos.map((todo) => (index) === id ? {...todo, text : editedTodo} : todo)
        )
        setEditing(null)
    }

    // Delete
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => (index) !== id))
    }

    return ( 
        <>
            <div>
                <h1>Todo List</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
                    <button type="submit">Add Todo</button>
                </form>
                {ToDoList}
            </div>
        </>
     );
}
 
export default ToDoList;