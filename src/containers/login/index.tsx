"use client";

import { useEffect, useState, FC, memo } from "react";

import { notifySuccess } from "@/lib/toast";
import OtpStepForm from "@/containers/login/otp-step";
import MobileStepForm from "@/containers/login/mobile-step";

const LoginForm: FC = () => {
	const [state, setState] = useState<{ message: string; data?: any }>({ message: "", data: null });
	const [formData, setFormData] = useState<{ mobile: string; otp?: string }>({ mobile: "", otp: "" });

	useEffect(() => {
		if (state?.message) {
			notifySuccess({ message: state?.message });
		}
	}, [state?.message]);

	const getSendOtpForm = () => {
		if (formData?.mobile && state?.data?.success) {
			return <OtpStepForm mobile={formData?.mobile} />;
		}
		return <MobileStepForm formData={formData} setState={setState} setFormData={setFormData} />;
	};

	const getContent = () => {
		return (
			<>
				<h2 className="mb-4 text-xl font-semibold text-gray-800">Hi, Welcome to SMEAssist</h2>
				<p className="mb-4 text-gray-600">Enter your mobile number to kick start your journey with us!</p>
				{getSendOtpForm()}
			</>
		);
	};

	return getContent();
};

export default memo(LoginForm);
