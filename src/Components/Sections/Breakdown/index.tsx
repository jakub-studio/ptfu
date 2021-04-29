import React from "react";
import Section from "../";
import { useReceipt } from "../../../Hooks/ReceiptHooks";
import Button from "../../Button";
import Currency from "../../Currency";
import Divider from "../../Divider";



const Breakdown: React.FC = () => {
	const { calculated } = useReceipt();
	return <Section title="breakdown" id="section-manage">
				<div className="receipt-item lineheight80">
					<b>total</b>
					<b><Currency value={calculated.total} /></b>
				</div>
				<Divider horizontal secondary />
				<div>
					<Button>copy</Button>
				</div>
	</Section>
}

export default Breakdown;