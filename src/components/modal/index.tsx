/**
 * 
 * ModalWrapper
 * 
 */

import { FC } from 'react';
import Modal, { ModalProps } from '@mui/material/Modal';

import Button from '@/components/button';
import '@/components/modal/style.scss';

type CustomProps = ModalProps & {
    open: boolean,
    onClose: (event: any, reason: string) => void,
    modalHeader: string | React.ReactNode,
    children: React.ReactNode,
    modalFooter?: React.ReactNode,
    hasHeader?: boolean,
    hasFooter?: boolean,
    modalClass?: string,
    hideCancel?: boolean,
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const BasicModal: FC<CustomProps> = ({ open, size = 'md', modalHeader, children, onClose, modalClass, hideCancel, hasHeader, hasFooter = true, modalFooter, ...props }) => {
    const handleClose = () => {
        onClose({}, 'escapeKeyDown');
    };

    const getSize = () : string => {
        const sizeMapping = {
            sm: 'w-3/12',
            md: 'w-4/12',
            lg: 'w-6/12',
            xl: 'w-8/12',
            xxl: 'w-10/12',
        }
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
            <div className="flex items-center justify-center h-screen">
                <div className={`bg-white rounded-lg ${getSize()}`}>
                    <div className="p-4 border-b flex justify-between items-center">
                        <h2 className="text-md font-medium">{modalHeader}</h2>
                        {!hideCancel ? <Button onClick={() => handleClose()}>Close</Button> : null}
                    </div>
                    <div className="p-4">
                        {children}
                    </div>
                    {hasFooter ? <div className="p-4 border-t flex justify-end">{modalFooter}</div> : null}
                </div>
            </div>
        </Modal>
    );
}

export default BasicModal;
