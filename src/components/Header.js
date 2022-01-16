import React from 'react'

const Header = ({ showAddTask, onAdd }) => {
    return (
        <header className="header">
            <h2>Task Tracker</h2>
            <button className="btn"
                style={{ backgroundColor: `${showAddTask ? 'red' : 'green'}` }}
                onClick={onAdd}>
                {showAddTask ? 'Close' : 'Add'}</button>
        </header>
    )
}

export default Header
