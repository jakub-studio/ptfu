import React from "react";
import Section from "../";
import "./receipt.css";
import Divider from "../../Divider";
import Currency from "../../Currency";
import { useReceipt } from "../../../Hooks/ReceiptHooks";
import ReceiptEntry from "./ReceiptEntry";

const Receipt: React.FC = () => {
	const { entries } = useReceipt();

	return <Section title="receipt" id="section-receipt">
		<div className="receipt-container">
			<div className="receipt-entries">
				{entries.map((e, i) => <ReceiptEntry entry={e} key={i} index={i} />)}
			</div>
		</div>
	</Section>
}

export default Receipt;