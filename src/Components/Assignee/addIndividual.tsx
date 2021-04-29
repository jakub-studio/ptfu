import React, { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import Modal from "../Modal";

interface AddIndividualModalProps {
	onAdd: (name: string) => void;
	onCancel: () => void;
}

const AddIndividual: React.FC<AddIndividualModalProps> = () => {
	const [name, setName] = useState("");

	return <Modal title="add indivdual">
		<InputField placeholder="indivdual name" value={name} onChange={setName}/>
		<div className="modal-buttons">
			<Button>cancel</Button>
			<Button primary>add</Button>
		</div>
	</Modal>
}

interface UseAddIndivdualModalState {
	open: boolean;
	callback: AddIndividualModalProps["onAdd"]
}

const useAddIndivdualModal = (onAdd: AddIndividualModalProps["onAdd"]) => {
	const [state, setState] = useState<UseAddIndivdualModalState>({
		open: false,
		callback: onAdd
	});

	const modalProps = {
		
	}

	return {
		
	}
}

export default AddIndividual;