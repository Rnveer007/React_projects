import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState("");
    const [updatedTask, setUpdatedTask] = useState([]);
    const [editingId, setEditingId] = useState(null);

    function addTask() {
        if (editingId !== null) {
            setUpdatedTask(
                updatedTask.map((obj) =>
                    obj.id === editingId ? { ...obj, name: task } : obj
                )
            );
            setEditingId(null)
        }
        else {
            const obj = { id: Date.now(), name: task };
            setUpdatedTask([...updatedTask, obj]);
        }
        setTask("");
    }

    function dltTask(id) {
        setUpdatedTask(updatedTask.filter((obj) => obj.id !== id))
    }
    function editTask(id) {
        const editList = updatedTask.find((obj) => obj.id === id)
        setTask(editList.name)
        setEditingId(id)


    }
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Your Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>{editingId !== null ? "Update Task" : "Add Task"}</button>

            <ul>
                {updatedTask.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dltTask(item.id)}>Delete</button>
                        <button onClick={() => editTask(item.id)}> Edit </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
