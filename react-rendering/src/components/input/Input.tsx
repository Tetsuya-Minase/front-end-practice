import { ChangeEvent, useMemo } from "react";

type InputProps = {
  type: 'text' | 'number',
  placeHolder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: React.FC<InputProps> = ({type, placeHolder, onChange}) => {
  return useMemo(() => {
    console.log(`in Input. type is ${type}`);
    return <input type={type} placeholder={placeHolder} onChange={onChange}/>
  }, [type, placeHolder, onChange]);
}