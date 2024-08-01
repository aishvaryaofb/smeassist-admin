"use client";

import { useEffect, useState } from "react";

import Cookie from "js-cookie";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import Modal from "@/components/modal";
import Button from "@/components/button";
import TextField from "@/components/textField";
import { State, verifyOtp } from "@/lib/actions/auth";
import SubmitButton from "@/containers/login/submit-button";

const LoginForm = ({ mobile }: { mobile: string }) => {
	const { push } = useRouter();
	const initialState: State = { message: null, errors: {}, data: null };
	const [formState, formAction] = useFormState(verifyOtp, initialState);
	const { errors, message, data } = formState || {};
	// state
	const [open, setOpen] = useState<boolean>(false);
	const [isPending, setIsPending] = useState<boolean>(false);
	const [formData, setFormData] = useState<{ mobile: string; otp?: string }>({
		mobile: "",
		otp: "",
	});

	useEffect(() => {
		if (message) {
			toast(message);
		}
	}, [message]);

	useEffect(() => {
		if (Object.keys(data || {})?.length !== 0) {
			setOpen(true);
		}
		// eslint-disable-next-line
    }, [data]);

	const handleChange = (value: string, type: string) => {
		const regex = /^[0-9]*/;
		if (!regex.test(value)) {
			return;
		}
		setFormData((prev) => ({ ...prev, [type]: value }));
	};

	const handleOnClose = (event: {}, reason: string): void => {
		setOpen(false);
	};

	const handleOrgSelection = (minOrgDto: any) => {
		Cookie.set("orgId", minOrgDto?.organisationId);
		push("/dashboard");
	};

	const getModal = () => {
		if (!open) {
			return null;
		}
		const modalContent = data?.orgLoginList.map(({ minOrgDto }: { minOrgDto: any }, index: number) => (
			<div key={`${minOrgDto?.name}-${index + 1}`} className="border-b last:border-0">
				<Button onClick={handleOrgSelection} className="w-full justify-start text-slate-500 hover:bg-slate-50">
					{minOrgDto?.name}
				</Button>
			</div>
		));
		return (
			<Modal open={open} size="lg" onClose={handleOnClose} modalHeader="Select Organisation" hasFooter={false}>
				{modalContent}
			</Modal>
		);
	};

	return (
		<>
			<form action={formAction}>
				<div className="mb-4">
					<input type="hidden" id="loginType" name="loginType" value="MOBILE" />
					<input type="hidden" id="mobile" name="mobile" value={mobile} />
					<TextField
						fullWidth
						id="otp"
						name="otp"
						variant="outlined"
						label="Enter OTP"
						inputProps={{
							maxLength: 6,
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, "otp")}
						value={formData?.otp}
						error={!isPending && errors?.otp}
						helperText={!isPending && errors?.otp}
					/>
				</div>
				<SubmitButton setIsPending={setIsPending} />
			</form>
			{getModal()}
		</>
	);
};

export default LoginForm;