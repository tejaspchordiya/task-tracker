import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (taskName === "" || day === "") {
            alert("Task name and day are mandatory!")
            return
        }

        onAdd({ taskName, day, reminder });

        setTaskName('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text"
                    placeholder="Add Task"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input
                    type="text"
                    placeholder="Add Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.target.checked)} />
            </div>
            <input type="submit" className="btn btn-block" value="Save Task" />
        </form>
    )
}

export default AddTask
