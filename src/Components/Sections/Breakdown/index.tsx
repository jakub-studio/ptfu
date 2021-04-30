import React, { useCallback } from "react";
import Section from "../";
import useAssignees from "../../../Hooks/AssigneeHooks";
import { useReceipt, printReceipt } from "../../../Hooks/ReceiptHooks";
import Assignee, { AssigneeList } from "../../Assignee";
import Button from "../../Button";
import Currency from "../../Currency";
import Divider from "../../Divider";



const Breakdown: React.FC = () => {
	const receipt = useReceipt();
	const { calculated } = receipt;
	const { getAssignee, assignees } = useAssignees();

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(
			printReceipt(receipt, assignees)
		)
	}, [receipt, assignees])

	return <Section title="breakdown" id="section-manage">
				<div className="receipt-item lineheight80">
					<b>total</b>
					<b><Currency value={calculated.total} /></b>
				</div>
				<Divider horizontal secondary />
				<AssigneeList>
					<Assignee>All Members</Assignee>
					<h2>Total: <Currency value={calculated.allMembers.total} /></h2>
					<h2>Indivdual: <Currency value={calculated.allMembers.indivdual} /></h2>
				</AssigneeList>
				<div className="mb-8" />
				{Object.keys(calculated.indivduals).map((id, index, _array) => {
					const assignee = getAssignee(id);
					if (!assignee) return null;

					return <>
					<AssigneeList key={assignee.id}>
						<Assignee colour={assignee.colour}>{assignee.name}</Assignee>
						<h2>Total: <Currency value={calculated.indivduals[id].total} /></h2>
						<h2>Indivdual: <Currency value={calculated.indivduals[id].indivdual} /></h2>
					</AssigneeList>
					{_array.length !== index + 1 && <div className="mb-8" />}
					</>
				})}
				<Divider horizontal/>
				<div>
					<Button onClick={onCopy}>copy</Button>
				</div>
	</Section>
}

export default Breakdown;