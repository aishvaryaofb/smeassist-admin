/**
 *
 * Progress
 *
 */

import { FC } from "react";
import LinearProgress, { LinearProgressProps as MuiLpp } from "@mui/material/LinearProgress";
import CircularProgress, { CircularProgressProps as MuiCpp } from "@mui/material/CircularProgress";

interface CircularProgressProps extends MuiCpp {}
interface LinearProgressProps extends MuiLpp {}

const CircularProgressWrapper: FC<CircularProgressProps> = ({ color, ...props }) => {
	return <CircularProgress color={color || "inherit"} {...props} />;
};

const LinearProgressWrapper: FC<LinearProgressProps> = (props) => {
	return <LinearProgress color={props.color || "inherit"} {...props} />;
};

export { CircularProgressWrapper as CircularProgress, LinearProgressWrapper as LinearProgress };
