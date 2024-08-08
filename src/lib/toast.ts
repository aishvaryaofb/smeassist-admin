import { toast } from "react-toastify";
import type { TypeOptions } from "react-toastify";

type Props = {
	message: string;
	type?: TypeOptions;
};

export const notify = ({ message = "notify", type = "info" }: Props) => {
	return toast.success(message, { type });
};

export const notifyError = ({ message }: { message: string }) => toast.error(message);

export const notifySuccess = ({ message }: { message: string }) => toast.success(message);
