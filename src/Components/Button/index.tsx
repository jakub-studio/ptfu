import React from "react";
import c from "classnames";
import "./button.css"

interface ButtonProps {
	onClick?: () => void;
	submit?: boolean;
	primary?: boolean;
	children: string;
	className?: string;
	width100?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	submit,
	primary,
	children,
	className,
	width100
}) => {
	return <input
		onClick={onClick}
		type={submit ? "submit" : "button"}
		value={children}
		className={c("button use-blue-focus", {
			"button-primary": primary,
			"width-100": width100
		} , className)}
	/>
}

export default Button