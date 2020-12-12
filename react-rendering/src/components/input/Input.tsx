import { ChangeEvent } from "react";

type InputProps = {
  type: 'text' | 'number',
  placeHolder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: React.FC<InputProps> = ({type, placeHolder, onChange}) => {
  return <input type={type} placeholder={placeHolder} onChange={onChange}/>
}