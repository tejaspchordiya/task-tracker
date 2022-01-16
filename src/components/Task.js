import PropTypes from 'prop-types'
import { FaTrashAlt } from 'react-icons/fa'

const Task = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => { onToggle(task.id) }} >
            <h3>{task.name}
                <FaTrashAlt onClick={() => { onDelete(task.id) }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

// Task.defaultProps = {
//     id: Math.floor(Math.random() * 10000) + 1,
//     reminder: false
// }

// Task.propTypes = {
//     name: PropTypes.string.isRequired,
//     day: PropTypes.string.isRequired
// }

export default Task