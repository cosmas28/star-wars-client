import * as React from "react";
import {BsX} from "react-icons/bs";

import {InputElementWrapper, InputElement, ClearIconWrapper} from "./styles";

type Props = {
	onChange: (value: string) => void;
	placeholder?: string;
	value?: string;
}

export const Input: React.FC<Props> = ({onChange, placeholder, value}) => {
	const handleClearInput = () => onChange("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)

	return (
		<InputElementWrapper>
			<InputElement onChange={handleChange} value={value} placeholder={placeholder} />
			{
				value && <ClearIconWrapper onClick={handleClearInput}><BsX/></ClearIconWrapper>
			}
		</InputElementWrapper>
	);
};
