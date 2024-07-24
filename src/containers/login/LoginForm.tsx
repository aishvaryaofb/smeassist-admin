"use client"

import { useEffect, useState, FC } from "react";
import { useFormState } from "react-dom";
import { toast } from 'react-toastify';

import TextField from '@/components/textField';
import { sendOtp, State } from '@/lib/actions/auth';
import OtpStepForm from '@/containers/login/OtpStep';
import SubmitButton from '@/containers/login/SubmitButton';

const LoginForm : FC = () => {
    const initialState: State = { message: null, errors: {}, data: null };
    const [formState, formAction] = useFormState(sendOtp, initialState);
    const { errors, message, data } = formState || {};
    // state
    const [formData, setFormData] = useState<{ mobile: string, otp?: string }>({
        mobile: '',
        otp: '',
    });
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        if (message) {
            toast(message);
        }
    }, [message]);
    
    const handleChange = (value : string, type : string) => {
        const regex = /^[0-9]*/;
        if (!regex.test(value)) {
            return;
        }
        setFormData(prev => ({ ...prev, [type]: value }));
    };

    const getSendOtpForm = () => {
        if (formData?.mobile && data?.success) {
            return <OtpStepForm mobile={formData?.mobile} />;
        }
        return (
            <form action={formAction}>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        id="mobile"
                        name="mobile"
                        variant="outlined"
                        label="Enter Mobile"
                        onChange={(e : React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, 'mobile')}
                        value={formData?.mobile}
                        error={!isPending && errors?.mobile}
                        helperText={!isPending && errors?.mobile}
                    />
                </div>
                <SubmitButton setIsPending={setIsPending} />
            </form>
        );
    }


    const getContent = () => {
        return (
            <>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Hi, Welcome to SMEAssist</h2>
                <p className="text-gray-600 mb-4">Enter your mobile number to kick start your journey with us!</p>
                {getSendOtpForm()}
            </>
        );
    };

    return getContent();
}

export default LoginForm;
