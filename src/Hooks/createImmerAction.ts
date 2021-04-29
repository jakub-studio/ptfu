import { PartialState } from "zustand";
import produce from "immer";

type ZustandState = Record<string | number | symbol, unknown>

interface ZustandSet<T extends ZustandState> {
	(updateStateFn: (state: PartialState<T>) => T): void
}

interface ZustandGet<T extends ZustandState> {
	(): T
}

const createImmerAction = <T extends ZustandState>(set: ZustandSet<T>, updateState: (state: Partial<T>) => any) => {
/* 	return function () {
		// @ts-ignore
		return set(state => produce(state, draftState => {
			updateState(draftState)
		}))
	} */
}

export default createImmerAction