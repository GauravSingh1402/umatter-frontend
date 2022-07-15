import React from "react";
import Hero from "./Hero";
import MainContent from "./MainContent";
import BottomDashboard from "./BottomDashboard";

const Dashboard = () => {
	return (
		<div>
			<Hero></Hero>
			<MainContent></MainContent>
			<BottomDashboard></BottomDashboard>
		</div>
	);
};

export default Dashboard;
