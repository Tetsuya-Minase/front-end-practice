import { Button } from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { useDispatch } from 'react-redux';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addList } from '../../../store';

export const InputButton = () => {
  console.log('in InputButton');
  const dispatch = useDispatch();
  const [name, setName] = useState<string | undefined>();
  const changeName = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('changeName');
    setName(event.target.value);
  }
  const [age, setAge] = useState<number | undefined>();
  const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('changeAge');
    setAge(Number(event.target.value) || 0);
  }

  const buttonClick = (event: FormEvent<HTMLButtonElement>) => {
    console.log('buttonClick');
    if (!name) {
      return;
    }
    dispatch(addList({name: name, age: 100}));
  }
  return (<>
    <Input type='text' onChange={changeName}/>
    <Input type='text' onChange={changeAge}/>
    <Button text='追加' onClick={buttonClick}/>
  </>)
}