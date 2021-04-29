import React from "react";
import useAssignees from "../../../Hooks/AssigneeHooks";
import Assignee, { AssigneeList } from "../../Assignee";
import AddIndividual from "../../Assignee/addIndividual";
import Divider from "../../Divider";

interface SelectAssigneesProps {
	assignees: string[];
	setAssignees: (newAssignees: string[]) => void;
}

const SelectAssignees: React.FC<SelectAssigneesProps> = props => {
	const { assignees, addIndividual, getAssignee } = useAssignees();
	const isAllMembers = props.assignees.length === 0;

	return <div className="mb-8">
		<div className="assignees-for">
			<h2>Assigned to:</h2>
			<AssigneeList>
				{isAllMembers && <Assignee>All Members</Assignee>}
				{props.assignees.map(id => {
					const a = getAssignee(id);
					if (!a) return null;
					<Assignee key={id} colour={a.colour}>{a.name}</Assignee>
				})}
			</AssigneeList>
		</div>

		<Divider horizontal secondary />

		<AssigneeList>
			{assignees.map(a => (
				<Assignee key={a.id} checkbox={props.assignees.includes(a.id)} colour={a.colour} >{a.name}</Assignee>
			))}
		</AssigneeList>

		<div className="mb-8" />

		<AssigneeList>
			<Assignee dashed input={{placeholder: "name", onInput: addIndividual}}>+ Add Indivdual</Assignee>
			<Assignee dashed>+ Add Group</Assignee>
		</AssigneeList>
	</div>
}

export default SelectAssignees