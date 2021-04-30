import React from "react";
import useAssignees from "../../../Hooks/AssigneeHooks";
import Assignee, { AssigneeList } from "../../Assignee";
import Divider from "../../Divider";

interface SelectAssigneesProps {
	assignees: string[];
	setAssignees: (newAssignees: string[]) => void;
}

const createAddAssigneeCallback = (
	currentAssignees: string[],
	setAssignees: (newAssignees: string[]) => void,
	id: string
) => {
	return () => setAssignees(Array.from(new Set(
		[...currentAssignees, id]
	)))
};

const createRemoveAssigneeCallback = (
	currentAssignees: string[],
	setAssignees: (newAssignees: string[]) => void,
	id: string
) => {
	return () => setAssignees(
		currentAssignees.filter(aid => aid !== id)
	)
};

const SelectAssignees: React.FC<SelectAssigneesProps> = props => {
	const { assignees, addIndividual, getAssignee, } = useAssignees();
	const isAllMembers = props.assignees.length === 0;

	return <div className="mb-8">
			<AssigneeList>
				<h2>Assigned to:</h2>
				{isAllMembers && <Assignee>All Members</Assignee>}
				{props.assignees.map(id => {
					const a = getAssignee(id);
					if (!a) return null;

					return <Assignee key={id} colour={a.colour} onClick={createRemoveAssigneeCallback(props.assignees, props.setAssignees, a.id)}>{a.name}</Assignee>
				})}
			</AssigneeList>

		<Divider horizontal secondary />

		<AssigneeList>
			{assignees.map(a => {
				const isActive = props.assignees.includes(a.id);
				return <Assignee
					key={a.id}
					checkbox={isActive}
					colour={a.colour}
					onClick={isActive ? createRemoveAssigneeCallback(props.assignees, props.setAssignees, a.id) : createAddAssigneeCallback(props.assignees, props.setAssignees, a.id)}
				>{a.name}</Assignee>
			})}
			<Assignee dashed input={{placeholder: "name", onInput: addIndividual}}>+</Assignee>
		</AssigneeList>
	</div>;
}

export default SelectAssignees