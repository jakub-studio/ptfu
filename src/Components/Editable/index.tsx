import React, { useCallback, useEffect, useRef, useState } from "react";
import c from "classnames";
import "./editable.css";

interface EditableProps {
	value: string;
	onChange: (val: string) => void;
	large?: boolean;
}

const Editable: React.FC<EditableProps> = props => {
	const [editing, isEditing] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);

	const onButtonClick = useCallback(() => {
		isEditing(true)
	}, []);

	const onCancel = useCallback(() => {
		isEditing(false)
	}, []);

	const onFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		props.onChange((data.get("value") as string).trim());
		isEditing(false);
	}, [props]);

	const handleClickOut = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			onCancel()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOut);

		return () => {
			document.removeEventListener('click', handleClickOut);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <button
		className={c("editable use-blue-focus", props.large && "large", editing ? "editing" : "idle")}
		onClick={onButtonClick}
		ref={ref}
		>
		{editing ? <form onSubmit={onFormSubmit}>
			<input
				name="value"
				defaultValue={props.value}
				autoFocus
				className={c("use-blue-focus", props.large && "large")}
				size={15}
			/>
		</form> : props.value}
	</button>
}

export default Editable