import React, { useState } from "react";
import Section from "../";
import InputField from "../../InputField";
import Button from "../../Button";
import SelectAssignees from "./SelectAssignees";
import "./submit.css"
import { useReceipt } from "../../../Hooks/ReceiptHooks";

const itemDescID = "submit-item-disc-input";

const Submit: React.FC = () => {
	const [desc, setDesc] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [assignees, setAssignees] = useState<string[]>([]);
	const addEntry = useReceipt(r => r.addEntry);

	const onSubmit = React.useCallback<(event: React.FormEvent<HTMLFormElement>) => void>(event => {
		event.preventDefault();

		addEntry({
			description: desc.trim(),
			price: parseFloat(price.trim()),
			assignees: []
		});

		setDesc("")
		setPrice("")

		document.getElementById(itemDescID)?.focus();
	}, [desc, price, addEntry])

	return <Section title="submit" id="section-submit">
		<form onSubmit={onSubmit}>
			<div className="input-array mb-8">
				<InputField autofocus placeholder="item description" value={desc} onChange={setDesc} id={itemDescID}/>
				<InputField placeholder="£ item price" value={price} onChange={setPrice} number/>
			</div>
			<SelectAssignees assignees={assignees} setAssignees={setAssignees} />
			<Button primary submit width100 className="mb-8">+ add to receipt</Button>
		</form>
	</Section>
}

export default Submit;