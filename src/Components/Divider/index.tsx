import React from "react";
import c from "classnames";
import "./divider.css";

interface DividerProps {
	secondary?: boolean;
	horizontal?: boolean;
}

const Divider: React.FC<DividerProps> = ({secondary, horizontal}) => {
	return <div className={c(
		secondary ? "divider-secondary" : "divider-primary",
		horizontal ? "divider-horizontal" : "divider-vertical"
	)}/>
}

export default Divider;