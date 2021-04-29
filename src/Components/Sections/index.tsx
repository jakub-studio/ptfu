import React from "react";
import Divider from "../Divider";
import "./section.css"

const Section: React.FC<{
	title: string
	id: string;
}> = ({title, id, children}) => {
	return <div className="section" id={id}>
		<h1 className="mb-8 lineheight80">{title}</h1>
		<Divider horizontal />
		{children}
	</div>
}

export default Section;