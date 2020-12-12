import { ChangeEvent } from "react";

type InputProps = {
  type: 'text',
  placeHolder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: React.FC<InputProps> = ({type, placeHolder}) => {
  return <input type={type} placeholder={placeHolder}/>
}