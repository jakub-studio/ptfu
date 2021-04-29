/// <reference types="react-scripts" />

declare namespace PTFU {
	interface Assignee {
		type: string;
		id: string;
		colour: string;
		name: string;
	}

	interface Indivdual extends Assignee {
		type: "indivdual"
	}
	
	export interface Group extends Assignee {
		type: "group"
		members: string[];
	}
	
	export type EntryAssignable = Indivdual | Group;
	
	export interface ReceiptEntry {
		description: string;
		price: number;
		assignees: Array<EntryAssignable | null>;
	}
}