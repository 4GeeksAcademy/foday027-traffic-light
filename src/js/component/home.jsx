import React from "react";
import Trafficlights from "./Trafficlights";
import Stick from './Stick.jsx';


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Stick/>
			<Trafficlights/>
		</div>
	);
};

export default Home;