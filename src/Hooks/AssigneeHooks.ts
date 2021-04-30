import create, { State } from "zustand";
import produce from "immer";


interface ReceiptHook extends State {
	assignees: PTFU.EntryAssignable[];
	addIndividual: (name: string) => PTFU.Indivdual;
	addGroup: (name: string, members?: string[]) => PTFU.Group;
	getAssignee: (id: string) => PTFU.EntryAssignable | undefined;
}

let lastId = 0;

const createId = (): string => {
	return `assignee-${++lastId}`;
}

const randomNumber = (min: number, max: number): number =>{
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const getColour = () => {
	const light = Math.round(Math.random()); // either 1 or 0, essentially a boolean
	const hue = randomNumber(0, 359);

	return `hsl(${hue}, 100%, ${light ? 85 : 75}%)`;
}

const useAssignees = create<ReceiptHook>((set, get) => ({
	assignees: [],
	addIndividual: name => {
		const obj: PTFU.Indivdual = {
			name,
			colour: getColour(),
			type: "indivdual",
			id: createId()
		}

		set(a => produce(a, assigneeHook => {
			assigneeHook.assignees.push(obj)
		}));

		return obj;
	},
	addGroup: (name, members) => {
		const obj: PTFU.Group = {
			name,
			colour: getColour(),
			type: "group",
			id: createId(),
			members: members ? members: []
		}

		set(a => produce(a, assigneeHook => {
			assigneeHook.assignees.push(obj)
		}));

		return obj;
	},
	getAssignee: id => {
		return get().assignees.find(a => a.id === id)
	}
}));

export default useAssignees;