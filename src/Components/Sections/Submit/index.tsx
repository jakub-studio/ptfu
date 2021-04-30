import React, { useCallback, useState } from "react";
import Section from "../";
import InputField from "../../InputField";
import Button from "../../Button";
import SelectAssignees from "./SelectAssignees";
import "./submit.css"
import { useReceipt } from "../../../Hooks/ReceiptHooks";

const itemDescID = "submit-item-desc-input";
const itemPriceID = "submit-item-price-input";

const focusItemDesc = () => document.getElementById(itemDescID)?.focus();
const focusItemPrice = () => document.getElementById(itemPriceID)?.focus();

const Submit: React.FC = () => {
	const [desc, setDesc] = useState("");
	const [price, setPrice] = useState("");
	const [descError, setDescError] = useState<string | undefined>(void 0);
	const [priceError, setPriceError] = useState<string | undefined>(void 0);
	const [assignees, setAssignees] = useState<string[]>([]);
	const addEntry = useReceipt(r => r.addEntry);

	const onSubmit = React.useCallback<(event: React.FormEvent<HTMLFormElement>) => void>(event => {
		event.preventDefault();

		if (desc.trim() === "") {
			setDescError("description missing");
			focusItemDesc();
			return;
		}

		if (price.trim() === "") {
			setPriceError("price missing");
			focusItemPrice();
			return;
		}

		addEntry({
			description: desc.trim(),
			price: parseFloat(price.trim()),
			assignees
		});

		setDesc("")
		setPrice("")

		focusItemDesc();
	}, [desc, price, addEntry, assignees]);

	const onDescChange = useCallback((data: string) => {
		if (descError) setDescError(void 0);
		
		setDesc(data)
	}, [descError, setDescError, setDesc]);

	const onPriceChange = useCallback((data: string) => {
		if (priceError) setPriceError(void 0);
		
		setPrice(data)
	}, [priceError, setPriceError, setPrice]);

	return <Section title="submit" id="section-submit">
		<form onSubmit={onSubmit}>
			<div className="input-array mb-8">
				<InputField
					autofocus
					placeholder="item description"
					value={desc}
					onChange={onDescChange}
					id={itemDescID}
					error={descError}
				/>
				<InputField
					placeholder="£ item price"
					value={price}
					onChange={onPriceChange}
					number
					id={itemPriceID}
					error={priceError}
					size={30}
				/>
			</div>
			<SelectAssignees assignees={assignees} setAssignees={setAssignees} />
			<Button primary submit width100 className="mb-8">+ add to receipt</Button>
		</form>
	</Section>
}

export default Submit;