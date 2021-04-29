import { ReactElement, useCallback } from "react";
import produce from "immer";
import create, { SetState, State } from "zustand";

// This property must be the same as $MODAL_ANIMATION_DURATION in renderer/index.scss
const MODAL_ANIMATION_DURATION = 200;

type ModalStates = "OPENING" | "IDLE" | "CLOSING"

interface Modal {
	id: number;
	component: ReactElement;
	state: ModalStates
	config: ModalConfig
}

interface ModalConfig {
	userClosable?: boolean;
	callback: ((...args: unknown[]) => unknown) | undefined;
}

const defaultModalConfig: ModalConfig = {
	userClosable: true,
	callback: void 0
};

interface ModalStore extends State {
	modals: Modal[];
	lastId: number;
	openModal: (modal: ReactElement, modalConfig?: ModalConfig) => number;
	setModalState: (modalId: number, newModalState: ModalStates) => void;
	closeModal: (modalId: number) => void;
	getModal: (modalId: number) => Modal | undefined;
	getModalIndex: (modalId: number) => number;
}

const useModals = create<ModalStore>((set, get) => ({
	modals: [],
	lastId: 0,
	getModal: id => {
		return get().modals.find(m => m.id === id);
	},
	getModalIndex: id => {
		return get().modals.findIndex(m => m.id === id);
	},
	openModal: (modal, modalConfig) => {
		const state = get();

		const modalObj: Modal = {
			id: state.lastId + 1,
			component: modal,
			state: "OPENING",
			config: Object.assign({}, defaultModalConfig, modalConfig)
		};

		set(produce((newState: ModalStore) => {
			newState.modals.push(modalObj);
			newState.lastId = modalObj.id;
		}));

		setTimeout((state: ModalStore) => {
			state.setModalState(modalObj.id, "IDLE");
		}, MODAL_ANIMATION_DURATION, state);

		return modalObj.id;
	},
	setModalState: (modalId: number, newModalState: ModalStates) => {
		const state = get();
		const index = state.getModalIndex(modalId);
		if (index === -1) return;

		set(produce((newState: ModalStore) => {
			newState.modals[index].state = newModalState;
		}));
	},
	closeModal: (modalId: number) => {
		const state = get();
		const i = state.getModalIndex(modalId);
		if (i === -1 || state.modals[i].state === "CLOSING") return;

		state.setModalState(modalId, "CLOSING");

		setTimeout((setFn: SetState<ModalStore>) => {
			setFn(produce((newState: ModalStore) => {
				const i = newState.modals.findIndex(m => m.id === modalId);
				newState.modals.splice(i, 1);
			}));
		}, MODAL_ANIMATION_DURATION, set);
	}
}));

const useModal = (id: number): Modal | undefined => {
	return useModals(s => s.modals).find(m => m.id === id);
};

const useOpenModalCallback = (modal: ReactElement): () => void => {
	return useCallback(() => {
		useModals.getState().openModal(modal);
	}, [useModals.getState(), modal]);
};

const useCloseModalCallback = (modalId: number): () => void => {
	return useCallback(() => {
		const state = useModals.getState();

		if (state.getModal(modalId) == null) return;
		else state.closeModal(modalId);
	}, [useModals.getState(), modalId]);
};

export default useModals;
export {
	useModal,
	useOpenModalCallback,
	useCloseModalCallback
};