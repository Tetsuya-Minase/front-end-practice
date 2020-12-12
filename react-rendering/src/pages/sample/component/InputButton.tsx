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
    console.log('changeName: ', name);
    setName(event.target.value);
  }
  const [age, setAge] = useState<number | undefined>();
  const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('changeAge: ', age);
    setAge(Number(event.target.value) || 0);
  }

  const buttonClick = (event: FormEvent<HTMLButtonElement>) => {
    console.log('buttonClick');
    console.log(`name: ${name} / age: ${age}`);
    
    if (!name || !age) {
      return;
    }
    dispatch(addList({name, age}));
  }
  return (<>
    <label> name: 
      <Input type='text' onChange={changeName}/>
    </label>
    <label> age: 
      <Input type='number' onChange={changeAge}/>
    </label>
    <Button text='追加' onClick={buttonClick}/>
  </>)
}