import React from 'react';
import './styles/banner.css';

const Banner = ({ username, taskItems }) => {
	return (
		<div className="banner">
			<h4 className="banner-title">
				<i className="far fa-check-square banner-icon"></i>
				{username} Todo App {''}
			</h4>
			<p className="banner-text">
				Tasks To Do: {taskItems.filter((singleTask) => !singleTask.done).length}
				<i className="fas fa-tasks banner-text-icon"></i>
			</p>
		</div>
	);
};

export default Banner;
