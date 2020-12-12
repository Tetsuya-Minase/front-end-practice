import { FC, FormEvent } from 'react';
import './button.css';

type ButtonProps = {
  text: string;
  onChange?: (event: FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  return <button onChange={props.onChange}>{props.text}</button>;
}