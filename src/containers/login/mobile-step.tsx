"use client";

import { memo, useEffect, useState } from "react";
import { useFormState } from "react-dom";

import TextField from "@/components/textField";
import { State, sendOtp } from "@/lib/actions/auth";
import SubmitButton from "@/containers/login/submit-button";

type Props = {
    formData: any,
    setState: ({ message, data }: { message: string; data?: any }) => void
    setFormData: ({ mobile, otp }: { mobile: string; otp?: string }) => void
}

const MobileStepForm = ({ formData, setState, setFormData }: Props) => {
	const initialState: State = { message: null, errors: {}, data: null };
	const [formState, formAction] = useFormState(sendOtp, initialState);
	const { errors, message, data } = formState || {};
	// state
	const [isPending, setIsPending] = useState<boolean>(false);

	useEffect(() => {
        setState({ message, data });
	}, [message, data]);

	const handleChange = (value: string, type: string) => {
		const regex = /^[0-9]*/;
		if (!regex.test(value)) {
			return;
		}
		setFormData((prev) => ({ ...prev, [type]: value }));
	};

	return (
		<form action={formAction}>
            <div className="mb-4">
                <TextField
                    fullWidth
                    id="mobile"
                    name="mobile"
                    variant="outlined"
                    label="Enter Mobile"
                    inputProps={{
                        maxLength: 10,
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, "mobile")}
                    value={formData?.mobile}
                    error={!isPending && errors?.mobile}
                    helperText={!isPending && errors?.mobile}
                />
            </div>
            <SubmitButton setIsPending={setIsPending} />
        </form>
	);
};

export default memo(MobileStepForm);
