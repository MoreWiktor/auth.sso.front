import React from 'react';

export type FormStyle = {
    title?: string;
    container?: string;
}

export type FormPayload = {
    title: string;
    style: FormStyle;
}

const Form = ({ payload, children }: { payload: FormPayload, children: React.ReactElement }) => {
    return (
        <div className={payload.style.container}>
            <h2 className={payload.style.title}>{ payload.title }</h2>
            <form>
                { children }
            </form>
        </div>
    );
  }

export default Form;
