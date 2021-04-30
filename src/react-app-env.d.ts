/// <reference types="react-scripts" />

declare namespace PTFU {
	interface BaseAssignee {
		type: string;
		id: string;
		colour: string;
		name: string;
	}

	interface Indivdual extends BaseAssignee {
		type: "indivdual"
	}
	
	export interface Group extends BaseAssignee {
		type: "group"
		members: string[];
	}
	
	export type EntryAssignable = Indivdual | Group;
	
	export interface ReceiptEntry {
		description: string;
		price: number;
		assignees: string[];
	}
}