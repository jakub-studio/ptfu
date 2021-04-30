import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./assignee.css";

interface AssigneeProps {
	colour?: string;
	onClick?: () => void;
	checkbox?: boolean;
	dashed?: boolean;
	input?: {
		placeholder: string;
		onInput: (data: string) => void;
	};
}

interface AssigneeState {
	displayInput: boolean;
}

const defaultColour = "hsl(0, 0%, 90%)";

interface AssigneeInputProps {
	onClickOut: () => void;
	placeholder?: string;
	onSubmit: (value: string) => void;
}

const AssigneeInput: React.FC<AssigneeInputProps> = ({onClickOut, placeholder, onSubmit}) => {
	const ref = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState("");
	
	const handleClickOut = (event: MouseEvent) => {
		console.log(event)
		if (ref.current && !ref.current.contains(event.target as Node)) {
			console.log("click out event")
			onClickOut();
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOut);

		return () => {
			document.removeEventListener('click', handleClickOut);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onInputSubmit = useCallback(() => {
		const valueToSubmit = value.trim();
		if (valueToSubmit === "") return;

		onSubmit(value.trim());
		onClickOut();
	}, [value, onSubmit, onClickOut]);

	const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const key = (event["nativeEvent"] as InputEvent).data;

		console.log(key)

		if (key === "Enter") {
			console.warn("enter key hit")
			event.preventDefault();
			return onInputSubmit();
		}

		setValue(event.target.value);
	}, [setValue, onInputSubmit]);

	return <div className="assignee-input-container" onClick={e => {
		e.stopPropagation()
		e.preventDefault()
	}}>
		<input
			size={10}
			autoFocus
			value={value}
			onChange={onChange}
			onClick={e => {
				e.stopPropagation()
				e.preventDefault()
			}}
			placeholder={placeholder}
			className="use-blue-focus"
			ref={ref}
		/>
		<div onClick={onInputSubmit} className="submit-button">+</div>
	</div>;
}

class Assignee extends React.Component<AssigneeProps, AssigneeState> {
	constructor(props: AssigneeProps) {
		super(props);

		this.state = {
			displayInput: false
		}

		this.onOuterClick = this.onOuterClick.bind(this);
		this.renderCheckbox = this.renderCheckbox.bind(this);
		this.getStyle = this.getStyle.bind(this);
		this.canBecomeInput = this.canBecomeInput.bind(this);
		this.renderChildren = this.renderChildren.bind(this);
		this.onInputSubmit = this.onInputSubmit.bind(this);
		this.onInputHide = this.onInputHide.bind(this);
		this.isClickable = this.isClickable.bind(this);
	}

	canBecomeInput (): boolean {
		return typeof this.props.input === "object";
	}
	isClickable (): boolean {
		return Boolean(this.props.onClick || this.canBecomeInput())
	}
	onOuterClick (event: React.MouseEvent<HTMLButtonElement>) {
		const { onClick } = this.props;

		event.preventDefault();

		if (typeof onClick === "function") {
			return onClick();
		}

		if (this.canBecomeInput() && this.state.displayInput === false) {
			this.setState({displayInput: true})
		}
	}
	onInputSubmit (data: string) {
		this.props.input?.onInput(data);
	}
	onInputHide () {
		this.setState({displayInput: false});
	}

	getStyle (): React.CSSProperties {
		const { colour, dashed } = this.props;

		const style: React.CSSProperties = {
			backgroundColor: colour ? colour : defaultColour
		}
	
		if (dashed) {
			style.backgroundColor = void 0;
		}

		return style;
	}
	renderCheckbox (): React.ReactNode {
		return (
			typeof this.props.checkbox === "boolean" && <div className={classNames("checkbox", `checkbox-${this.props.checkbox}`)} />
		)
	}
	renderChildren (): React.ReactNode {
		return this.state.displayInput ?
			<AssigneeInput
				onSubmit={this.onInputSubmit}
				onClickOut={this.onInputHide}
				placeholder={this.props.input?.placeholder}
			/> : this.props.children;
	}
	render() {
		const { dashed } = this.props;
		const clickable = this.isClickable()

		return <button
			className={classNames("assignee use-blue-focus", dashed && "dashed", clickable && "clickable")}
			onClick={this.onOuterClick}
			style={this.getStyle()}
			tabIndex={clickable ? 0 : -1}
		>
			{this.renderCheckbox()}
			{this.renderChildren()}
		</button>
	}
}

const AssigneeList: React.FC = ({ children }) => {
	return <div className="assignee-list">
		{children}
	</div>
}

export default Assignee;
export {
	AssigneeList
}