import React, { useState } from 'react';
import './styles/creator.css';

const Creator = ({ callback }) => {
	const [newTask, setNewTask] = useState('');

	const updateTaskValue = (e) => setNewTask(e.target.value);

	const createTasks = () => {
		console.log(newTask);
		callback(newTask);
		setNewTask('');
	};

	return (
		<div className="task-creator">
			<input
				className="creator-inp"
				type="text"
				value={newTask}
				onChange={updateTaskValue}
				placeholder="Add a New Task..."
			/>
			<button
				className="creator-btn"
				onClick={createTasks}
				onSubmit={createTasks}
			>
				<i className="fas fa-angle-right creator-btn-icon"></i>
				Add Task
			</button>
		</div>
	);
};

export default Creator;
