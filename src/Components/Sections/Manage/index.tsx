import React from "react";
import Section from "../";
import Button from "../../Button";
import "./manage.css"
import { useReceipt } from "../../../Hooks/ReceiptHooks";

const Manage: React.FC = () => {
	const clearReceipt = useReceipt(e => e.clear);

	return <Section title="manage" id="section-manage">
		<div className="button-array">
			<Button>edit indivudals</Button>
			<Button>edit groups</Button>
			<Button>import receipt</Button>
			<Button>export receipt</Button>
			<Button onClick={clearReceipt}>clear receipt</Button>
		</div>
	</Section>
}

export default Manage;