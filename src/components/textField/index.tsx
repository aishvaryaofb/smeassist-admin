/**
 *
 * TextField
 *
 */

import { FC } from "react";
import TextField, { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

type TextFieldProps = MuiTextFieldProps & {
	// isLoading?: boolean;
};

const TextFieldWrapper: FC<TextFieldProps> = ({ ...props }) => {
	return <TextField {...props} />;
};

export default TextFieldWrapper;
