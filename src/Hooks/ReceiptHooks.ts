import create, { State } from "zustand";
import produce from "immer";

interface ReceiptCalculated {
	total: number;
}

const calculate = (entries: PTFU.ReceiptEntry[]): ReceiptCalculated => {
	let total = 0;

	for (const entry of entries) {
		total = total + entry.price
	}

	return {
		total
	}
}

interface ReceiptHook extends State {
	entries: PTFU.ReceiptEntry[];
	calculated: ReceiptCalculated;
	addEntry: (entryData: PTFU.ReceiptEntry) => void;
	removeEntry: (index: number) => void;
	clear: () => void;
}

const updateReceipt = (receipt: ReceiptHook): ReceiptHook => {
	receipt.calculated = calculate(receipt.entries);
	return receipt;
}

const useReceipt = create<ReceiptHook>((set, get) => ({
	entries: [],
	calculated: {
		total: 0
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

export {
	useReceipt
}