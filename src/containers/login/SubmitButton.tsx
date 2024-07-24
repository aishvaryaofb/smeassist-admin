"use client"

/**
 * 
 * SubmitButton
 * 
 */

import { useEffect } from "react";
import { useFormStatus } from "react-dom";

import Button from '@/components/button';

const SubmitButton = ({ setIsPending } : { setIsPending: (isPending: boolean) => void }) => {
    const status = useFormStatus();

    useEffect(() => {
        setIsPending(status?.pending);
        // eslint-disable-next-line
    }, []);

    return (
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth isLoading={status?.pending}>Submit</Button>
    );
}

export default SubmitButton;
