/**
 *
 * ButtonWrapper
 *
 */

import { FC } from "react";
import { CircularProgress } from "@/components/progress";
import Button, { ButtonProps } from "@mui/material/Button";

interface CustomProps extends ButtonProps {
	isLoading?: boolean;
}

const ButtonWrapper: FC<CustomProps> = ({ isLoading, children, ...props }) => {
	return (
		<Button variant={props.variant} disabled={isLoading || props.disabled} {...props}>
			{children}
			{isLoading ? <CircularProgress size="20px" color="inherit" className="ml-4" /> : null}
		</Button>
	);
};

export default ButtonWrapper;
