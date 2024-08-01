/**
 *
 * ModalWrapper
 *
 */

import { FC } from "react";
import Modal, { ModalProps } from "@mui/material/Modal";
import Button from "@/components/button";

type CustomProps = ModalProps & {
	open: boolean;
	onClose: (event: any, reason: string) => void;
	modalHeader: string | React.ReactNode;
	children: React.ReactNode;
	modalFooter?: React.ReactNode;
	hasHeader?: boolean;
	hasFooter?: boolean;
	modalClass?: string;
	hideCancel?: boolean;
	size?: "sm" | "md" | "lg" | "xl" | "xxl";
};

const BasicModal: FC<CustomProps> = ({
	open,
	size = "md",
	modalHeader,
	children,
	onClose,
	modalClass,
	hideCancel,
	hasHeader,
	hasFooter = true,
	modalFooter,
	...props
}) => {
	const handleClose = () => {
		onClose({}, "escapeKeyDown");
	};

	const getSize = (): string => {
		const sizeMapping = {
			sm: "w-3/12",
			md: "w-4/12",
			lg: "w-6/12",
			xl: "w-8/12",
			xxl: "w-10/12",
		};
		return sizeMapping[size];
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
			{...props}
		>
			<div className="flex h-screen items-center justify-center">
				<div className={`rounded-lg bg-white ${getSize()}`}>
					<div className="flex items-center justify-between border-b p-2 pl-4">
						<h2 className="text-md font-medium">{modalHeader}</h2>
						{!hideCancel ? (
							<div onClick={() => handleClose()} className="cursor-pointer p-2 text-xs font-medium text-slate-400 hover:bg-slate-100">
								{/* <span className="material-symbols-outlined">close</span> */}
								<span>ESC</span>
							</div>
						) : null}
					</div>
					<div className="max-h-80 overflow-auto p-4">{children}</div>
					{hasFooter ? <div className="flex justify-end border-t p-4">{modalFooter}</div> : null}
				</div>
			</div>
		</Modal>
	);
};

export default BasicModal;
