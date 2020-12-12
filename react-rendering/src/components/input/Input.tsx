type InputProps = {
  type: 'text',
  placeHolder?: string
};

export const Input: React.FC<InputProps> = ({type, placeHolder}) => {
  return <input type={type} placeholder={placeHolder}/>
}