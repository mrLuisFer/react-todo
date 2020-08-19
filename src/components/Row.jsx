import React from 'react';
import './styles/row.css';

const Row = ({ task, toggleTask }) => (
	<tr key={task.name} className="row">
		<td className="row-td">
			<i className="far fa-check-square row-icon"></i>
			{task.name}
		</td>
		<td className="row-td2">
			<input
				className="row-inp"
				type="checkbox"
				checked={task.done}
				onChange={() => toggleTask(task)}
			/>
		</td>
	</tr>
);

export default Row;
