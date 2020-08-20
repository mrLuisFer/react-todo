import React from 'react';
import './styles/banner.css';

const Banner = ({ username, taskItems }) => {
	const showMsg = () => {
		alert('Did you discover a secret :D');
	};

	return (
		<div className="banner">
			<h4 className="banner-title">
				{username} Todo App {''}
			</h4>
			<p className="banner-text">
				Tasks To Do: {taskItems.filter((singleTask) => !singleTask.done).length}
				<i className="fas fa-tasks banner-text-icon" onClick={showMsg}></i>
			</p>
		</div>
	);
};

export default Banner;
