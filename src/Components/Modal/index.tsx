import React from "react";
import AriaModal from "react-aria-modal";
import Divider from "../Divider";
import "./modal.css";

interface ModalProps {
	open?: boolean;
	title: string;
}

const rootNode = document.getElementById("root") as HTMLDivElement;

const Modal: React.FC<ModalProps> = ({title, open, children}) => {
	return <AriaModal
		titleText={title}
		focusTrapPaused
		applicationNode={rootNode}
		underlayStyle={{ display: "flex", justifyContent: "center", alignItems: "center", cursor: "initial" }}
	>
		<div className="modal">
			<h1>{title}</h1>
			<Divider horizontal />
			{children}
		</div>
	</AriaModal>
}

export default Modal;