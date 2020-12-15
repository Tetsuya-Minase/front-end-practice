import { FC, FormEvent } from 'react';
import './button.css';

type ButtonProps = {
  text: string;
  onClick?: (event: FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  console.log(`in Button. text is ${props.text}`);
  return <button onClick={props.onClick}>{props.text}</button>;
}