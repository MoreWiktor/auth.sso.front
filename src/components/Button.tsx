import { useState } from 'react';
import { Enums, Types } from '../shared/types/page-init-data';

export type ButtonPayload = { 
    sendingData: Record<string, string | object>,
    type: Enums.ButtonTypeEnum;
    style: Types.ButtonStyleType;
    title: string;
    defaultValue?: string | number | readonly string[];
};

type ButtonStateType = {
    isLoading: boolean;
    isError: boolean;
    data?: string;
    error?: Error;
    disabled: boolean;
};

const Button = ({ payload }: { payload: ButtonPayload; key?: string; }) => {
    const [state, setState] = useState<ButtonStateType>({
        isLoading: false,
        isError: false,
        disabled: false,
    });

    const onButtonClick = () => {
        setState({
            ...state,
            isLoading: true,
            disabled: true,
        });
        };

    let className = payload.style.base;
    let title = payload.title;
    if (state.isLoading) { 
        className = className + ' ' + payload.style.loading;
        title = 'Loading...';
    } else if (state.isError && state.error) { 
        className = className + ' ' + payload.style.error;
        title = state.error?.message;
    } else {
        className = className + ' ' + payload.style.done
    } 
    
    return (
        <button
            onClick={onButtonClick}
            className={className}
            defaultValue={payload.defaultValue}
            disabled={state.disabled}
            
        >
            { title }
        </button>
    );
}

export default Button;
