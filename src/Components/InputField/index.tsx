import classNames from "classnames";
import React from "react";
import "./input.css"

interface InputFieldProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	number?: boolean;
	autofocus?: boolean;
	id?: string;
	size?: number;
	error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	value,
	onChange,
	placeholder,
	number,
	autofocus,
	id,
	size,
	error
}) => {
	const changeHandler = React.useCallback<(event: { nativeEvent: InputEvent, target: HTMLInputElement }) => void>(event => {
		const { value: newValue } = event.target;
		const key = event.nativeEvent.data;

		if (!number) return onChange(newValue);

		const split = newValue.split(".");
		const pointCount = split.length - 1;

		if (key === null) return onChange(newValue); // null is backspace
		if (key === ".") {
			if (pointCount >= 2) return;
			return onChange(newValue);
		}
		if (isNaN(parseInt(key, 10))) return;
		if (pointCount === 1 && split[1].length >= 3) return; // ensure you can't have two decimal points

		onChange(newValue);
	}, [onChange, number])

	return <div className="input-field-container">
		<input
			autoFocus={autofocus}
			className={classNames("input-field use-blue-focus", error && "error")}
			value={value}
			onChange={changeHandler as any}
			placeholder={placeholder}
			id={id}
			autoComplete="off"
			size={size}
		/>
		{typeof error === "string" && <div className="error-box"><span>error:</span>{error}</div>}
	</div>
}

export default InputField