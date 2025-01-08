import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState("");
    const [updatedTask, setUpdatedTask] = useState([]);

    function addTask() {
        if (task.trim() === "") return;
        const obj = { id: Date.now(), key: task };
        setUpdatedTask([...updatedTask, obj]); 
        setTask(""); 
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Your Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {updatedTask.map((item) => (
                    <li key={item.id}>
                        {item.key}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
