import React, { useCallback } from "react";
import "./app.css"
import Breakdown from "../Sections/Breakdown";
import Divider from "../Divider";
import Receipt from "../Sections/Receipt";
import Submit from "../Sections/Submit";
import Manage from "../Sections/Manage";
import { useReceipt } from "../../Hooks/ReceiptHooks";
import Editable from "../Editable";

const App = () => {
	const name = useReceipt(r => r.name);

	const onNameChange = useCallback((name: string) => {
		useReceipt.setState({name})
	}, []);

	return <div className="app">
		<div className="app-header">
			<div className="app-logo">
				<h1>💵 pay the f*** up</h1>
			</div>
			<Editable large value={name} onChange={onNameChange} />
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

export default App;