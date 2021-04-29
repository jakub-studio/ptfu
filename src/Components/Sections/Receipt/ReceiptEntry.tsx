import React, { useCallback } from "react";
import Divider from "../../Divider";
import Currency from "../../Currency";
import { useReceipt } from "../../../Hooks/ReceiptHooks";

interface ReceiptEntryProps {
	entry: PTFU.ReceiptEntry;
	index: number;
}

const ReceiptEntry: React.FC<ReceiptEntryProps> = ({ entry, index }) => {
	const { removeEntry } = useReceipt();

	const onDelete = useCallback(() => {
		removeEntry(index);
	}, [index, removeEntry]);

	return <div className="receipt-entry-container">
		<div className="receipt-item lineheight80 receipt-entry">
			<span>{entry.description}</span>
			<span>
				<Currency value={entry.price} />
				<button className="receipt-delete-entry-button" onClick={onDelete}>x</button>
			</span>
		</div>
	</div>
}

export default ReceiptEntry;