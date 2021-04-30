import create, { State } from "zustand";
import produce from "immer";
import useAssignees from "./AssigneeHooks";

interface Charge {
	total: number;
	indivdual: number;
}

interface ReceiptCalculated {
	total: number;
	allMembers: Charge;
	indivduals: Record<string, Charge>
}

const calculate = (entries: PTFU.ReceiptEntry[], assignees: PTFU.EntryAssignable[]): ReceiptCalculated => {
	const indivduals = assignees.filter(a => a.type === "indivdual") as PTFU.Indivdual[];

	let receiptTotal = 0;
	let allMembersTotal = 0;
	let allMembersIndivdual = 0;
	const indivdualCharges: ReceiptCalculated["indivduals"] = {}

	for (const indivdual of indivduals) {
		indivdualCharges[indivdual.id] = {
			total: 0,
			indivdual: 0
		}
	}

	for (const entry of entries) {
		const isForAllMembers = entry.assignees.length === 0;

		if (isForAllMembers) {
			allMembersTotal = allMembersTotal + entry.price;
			allMembersIndivdual = (allMembersTotal / indivduals.length)
		} else {
			const split = entry.price / entry.assignees.length;
			
			for (const assignee of entry.assignees) {
				indivdualCharges[assignee].indivdual = indivdualCharges[assignee].indivdual + split
			}
		}

		receiptTotal = receiptTotal + entry.price
	}

	for (const indivdual of indivduals) {
		const i = indivdualCharges[indivdual.id]
		i.total = i.total + i.indivdual + allMembersIndivdual
	}

	return {
		total: receiptTotal,
		allMembers: {
			total: allMembersTotal,
			indivdual: allMembersIndivdual
		},
		indivduals: indivdualCharges
	}
}

interface ReceiptHook extends State {
	name: string;
	entries: PTFU.ReceiptEntry[];
	calculated: ReceiptCalculated;
	addEntry: (entryData: PTFU.ReceiptEntry) => void;
	removeEntry: (index: number) => void;
	clear: () => void;
}

const updateReceipt = (receipt: ReceiptHook): ReceiptHook => {
	receipt.calculated = calculate(receipt.entries, useAssignees.getState().assignees);
	return receipt;
}

const useReceipt = create<ReceiptHook>((set, get) => ({
	name: "Untitled Shop",
	entries: [],
	calculated: {
		total: 0,
		allMembers: {
			total: 0,
			indivdual: 0
		},
		indivduals: {}
	},
	addEntry: entryData => set(r => produce(r, draftReceipt => {
		draftReceipt.entries.push(entryData)
		updateReceipt(draftReceipt)
	})),
	removeEntry: index => set(r => produce(r, draftReceipt => {
		if (index > -1) draftReceipt.entries.splice(index, 1);
		updateReceipt(draftReceipt)
	})),
	clear: () => set(r => produce(r, draftReceipt => {
		draftReceipt.entries = []
		updateReceipt(draftReceipt)
	}))
}));

const price = (amount: number) => "£" + amount.toLocaleString("en", {minimumFractionDigits: 2});
const indent = (str: string) => "  -  " + str;

const printReceipt = (receipt: ReceiptHook, assignees: PTFU.EntryAssignable[]): string => {
	return [
		`Receipt Breakdown - ${receipt.name}`,
		"",
		`Total Receipt Charge: ${price(receipt.calculated.total)}`,
		"",
		"All Members:",
		indent(`Total Charge: ${price(receipt.calculated.allMembers.total)}`),
		indent(`Individual Charge: ${price(receipt.calculated.allMembers.indivdual)}`),
		"",
		Object.keys(receipt.calculated.indivduals).map(id => {
			const a = assignees.find(assignee => assignee.id === id);
			if (!a) return "";
			return [
				`${a.name}:`,
				`Total Charge: ${price(receipt.calculated.indivduals[a.id].total)}`,
				receipt.calculated.indivduals[a.id].indivdual === 0 ? "" : `(Individual Charge: ${price(receipt.calculated.indivduals[a.id].indivdual)})`,
			].join(" ").trim()
		}),
		"",
		"Receipt Items:",
		receipt.entries.map(e => (
			`${e.description} - ${price(e.price)} (${e.assignees.length === 0 ? "All" : e.assignees.map(a => {
				const assignee = assignees.find(assignee => assignee.id === a);
				if (!a) return null;
				else return assignee?.name
			}).filter(Boolean).join(", ")})`
		))
	].flat().join("\n")
}

export {
	useReceipt,
	printReceipt
}