"use client";
/**
 *
 * BackdropWrapper
 *
 */

import { FC } from "react";
import { CircularProgress } from "@/components/progress";
import Backdrop, { BackdropProps } from "@mui/material/Backdrop";

interface CustomProps extends BackdropProps {
	open: boolean;
	onClose?: () => void;
}

const BackdropWrapper: FC<CustomProps> = ({ open, onClose, ...props }) => {
	return (
		<Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={onClose} {...props}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default BackdropWrapper;
