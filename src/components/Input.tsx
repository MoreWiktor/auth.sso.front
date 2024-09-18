import React from 'react';

export type InputStyle = {
  container?: string;
  label?: string;
  input?: string;
}

export type InputPayload = { 
    title: string;
    value: string;
    changeHandler: (val: React.ChangeEvent<HTMLInputElement>) => void;
    type: React.HTMLInputTypeAttribute;
    required?: boolean;
    style?: InputStyle;
}

const Input = ({ payload }: { payload: InputPayload, key?: string }) => {
  const { changeHandler, title, type, value, required, style } = payload;
  return (
    <div className={style?.container}>
      <label className={style?.label}>{ title }</label>
      <input
        type={type}
        className={style?.input}
        value={value}
        onChange={changeHandler}
        required={required}
        name={title.toLowerCase()}
      />
    </div>
  );
}

export default Input;
