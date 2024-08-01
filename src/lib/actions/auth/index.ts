"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import routes from "@/lib/routes";
import routesManager from "@/lib/routes";
import cookieManager from "@/lib/cookies";
import RequestManager from "@/lib/request";

export type State = {
	data?: object | null;
	message?: string | null;
	errors?: {
		loginType?: string[];
		mobile?: string[];
		otp?: string[];
	};
};

const sendOtpFormSchema = z.object({
	mobile: z.string().trim().min(10).max(10, {
		message: "Please enter valid mobile number",
	}),
});

const verifyFormSchema = z.object({
	loginType: z.string({
		message: "Login type cannot be empty",
	}),
	mobile: z.string().trim().min(10).max(10, {
		message: "Please enter valid mobile number",
	}),
	otp: z.string().trim().min(6).max(6, {
		message: "Please enter valid otp",
	}),
});

export async function sendOtp(prevState: any, formData: FormData) {
	const validatedFields = sendOtpFormSchema.safeParse({
		mobile: formData.get("mobile"),
	});
	if (!validatedFields.success) {
		return {
			...prevState,
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to Register.",
			data: null,
		};
	}

	const { mobile } = validatedFields?.data || {};
	const responseData = await RequestManager.sendOtp(mobile);
	if (!responseData) {
		return {
			...prevState,
			errors: null,
			message: "Ops! Something went wrong. Please try again.",
			data: null,
		};
	}
	if (responseData.error) {
		return {
			...prevState,
			errors: responseData.error,
			message: "Failed to Register.",
			data: null,
		};
	}

	return { message: "Otp send successfully!", errors: null, data: { success: true } }; // setting data {} for true value
}

export async function verifyOtp(prevState: any, formData: FormData) {
	const validatedFields = verifyFormSchema.safeParse({
		loginType: formData.get("loginType"),
		mobile: formData.get("mobile"),
		otp: formData.get("otp"),
	});
	if (!validatedFields.success) {
		return {
			...prevState,
			errors: validatedFields.error.flatten().fieldErrors,
			message: "Missing Fields. Failed to Register.",
			data: null,
		};
	}

	const { loginType, mobile, otp } = validatedFields?.data || {};
	const payload = { loginType, mobile, otp };
	const responseData = await RequestManager.verifyOtp(payload);
	if (!responseData) {
		return {
			...prevState,
			errors: null,
			message: "Ops! Something went wrong. Please try again.",
			data: null,
		};
	}
	if (responseData.error) {
		return {
			...prevState,
			errors: responseData.error,
			message: "Failed to Register.",
			data: null,
		};
	}

	cookieManager.set("authToken", responseData?.token);
	revalidatePath(routesManager.dashboard.path);
	return { message: "Otp verified successfully!", errors: null, data: responseData };
}

export const signOut = (): void => {
	cookieManager.delete("authToken");
	cookieManager.delete("orgId");
	redirect(routes.login.path);
};
