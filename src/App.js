import React, { useState, useEffect } from 'react';
import Row from './components/Row.jsx';
import Banner from './components/Banner.jsx';
import Creator from './components/Creator.jsx';
import Control from './components/Control.jsx';

import './App.css';

function App() {
	const [username, setUsername] = useState('React');
	const [taskItems, setTaskItems] = useState([
		{
			name: 'task',
			done: false,
		},
		{
			name: 'task2',
			done: false,
		},
		{
			name: 'task3',
			done: true,
		},
	]);

	useEffect(() => {
		let data = localStorage.getItem('tasks');
		if (data != null) {
			setTaskItems(JSON.parse(data));
		} else {
			setUsername('React');
			setTaskItems([
				{
					name: 'To-do App created by mrLuisFer',
					done: false,
				},
			]);
			setCompleted(true);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(taskItems));
	}, [taskItems]);

	const [completed, setCompleted] = useState(true);

	const toggleTask = (task) =>
		setTaskItems(
			taskItems.map((singleTask) =>
				singleTask.name === task.name
					? { ...singleTask, done: !singleTask.done }
					: singleTask
			)
		);

	const tableRows = (doneValue) =>
		taskItems
			.filter((t) => t.done === doneValue)
			.map((task) => (
				<Row
					className="table-row"
					task={task}
					key={task.name}
					toggleTask={toggleTask}
				/>
			));

	const createNewTask = (taskName) => {
		if (
			!taskItems.find((singleT) => singleT.name === taskName) &&
			taskName.length > 1
		) {
			setTaskItems([...taskItems, { name: taskName, done: false }]);
		}
	};

	return (
		<div className="App">
			<Banner username={username} taskItems={taskItems} />
			<Creator callback={createNewTask} />
			<table className="table">
				<thead className="thead">
					<tr className="thead-tr">
						<th className="app-desc">
							<i className="fas fa-clipboard-list thead-icon"></i>Description
						</th>
						<th className="app-done">
							<i className="fas fa-check-double thead-icon"></i>
							Done
						</th>
					</tr>
				</thead>
				<tbody className="tbody">{tableRows(false)}</tbody>
			</table>
			<div className="control">
				<Control
					description="Completed Task"
					iChecked={completed}
					callback={(checked) => setCompleted(checked)}
				/>
			</div>
			{completed && (
				<table className="table table-complete">
					<thead className="thead">
						<tr className="thead-tr">
							<th className="app-desc">
								<i className="fas fa-clipboard-list thead-icon"></i>Description
							</th>
							<th className="app-done">
								<i className="fas fa-check-double thead-icon"></i>
								Done
							</th>
						</tr>
					</thead>
					<tbody className="tbody ">{tableRows(true)}</tbody>
				</table>
			)}
		</div>
	);
}

export default App;
