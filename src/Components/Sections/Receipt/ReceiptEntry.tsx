import React, { useCallback } from "react";
import Currency from "../../Currency";
import { useReceipt } from "../../../Hooks/ReceiptHooks";
import useAssignees from "../../../Hooks/AssigneeHooks";
import Assignee, { AssigneeList } from "../../Assignee";

interface ReceiptEntryProps {
	entry: PTFU.ReceiptEntry;
	index: number;
}

const ReceiptEntry: React.FC<ReceiptEntryProps> = ({ entry, index }) => {
	const { removeEntry } = useReceipt();
	const { getAssignee } = useAssignees();

	const onDelete = useCallback(() => {
		removeEntry(index);
	}, [index, removeEntry]);

	return <div className="receipt-entry-container">
		<div className="receipt-item lineheight80 receipt-entry">
			<AssigneeList>
				<span>{entry.description}</span>
				{entry.assignees.length === 0 && <Assignee>All Members</Assignee>}
				{entry.assignees.map(a => {
					const assignee = getAssignee(a);
					if (!assignee) return null;
					return <Assignee key={assignee.id} colour={assignee.colour}>{assignee.name}</Assignee>
				})}
			</AssigneeList>
			<span>
				<Currency value={entry.price} />
				<button className="receipt-delete-entry-button" onClick={onDelete}>x</button>
			</span>
		</div>
	</div>
}

export default ReceiptEntry;