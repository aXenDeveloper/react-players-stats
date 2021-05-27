import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormType } from './FormTypes';

const Form: FC<FormType> = ({ playersList, setPlayersList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Working!');

    setPlayersList([
      ...playersList,
      {
        id: uuidv4(),
        name: inputValue,
        points: 0
      }
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={handleInput} value={inputValue} />
      </label>

      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
