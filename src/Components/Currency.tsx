import React from "react";

interface CurrencyProps {
	value: number;
	symbol?: string;
}

const Currency: React.FC<CurrencyProps> = ({value, symbol}: CurrencyProps) => {
	return <>
		{symbol || "£"}
		{value.toLocaleString("en", {minimumFractionDigits: 2})}
	</>
}

export default Currency