import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div>
				<h1>Add a task</h1>
				<input
				type="text"
				placeholder="Write a task"
				/>
			</div>
		</div>
	);
};

export default Home;
