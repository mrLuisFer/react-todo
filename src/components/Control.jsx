import React from 'react';
import './styles/control.css';

const Control = ({ isChecked, description, callback }) => {
	return (
		<div className="ctrl">
			<input
				type="checkbox"
				className="ctrl-inp"
				checked={isChecked}
				onChange={(e) => callback(e.target.checked)}
			/>
			<label className="ctrl-label" htmlFor="form-check-label">
				Show {description}
				<i className="far fa-calendar-check ctrl-task-icon"></i>
			</label>
		</div>
	);
};

export default Control;
