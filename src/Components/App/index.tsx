import React from "react";
import "./app.css"
import Breakdown from "../Sections/Breakdown";
import Divider from "../Divider";
import Receipt from "../Sections/Receipt";
import Submit from "../Sections/Submit";
import Manage from "../Sections/Manage";

const App = () => {
	return <div className="app">
		<div className="app-header">
			<div className="app-logo">
				<h1>💵 pay the f*** up</h1>
			</div>
			<h1>Sainsbury's</h1>
		</div>
		<div className="app-sections">
			<Breakdown />
			<Divider />
			<Receipt />
			<Divider />
			<div className="section">
				<Submit />
				<Manage />
			</div>
		</div>
	</div>
}

export default App; //