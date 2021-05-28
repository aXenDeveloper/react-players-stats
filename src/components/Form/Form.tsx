import { ChangeEvent, FC, FormEvent, useState } from 'react';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { FormType } from './FormTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form: FC<FormType> = ({ playersList, setPlayersList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPlayersList([
      ...playersList,
      {
        id: uuidv4(),
        name: inputValue,
        points: 0
      }
    ]);

    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.form_label}>
        <input
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder="Enter a player name"
        />
      </label>

      <button type="submit" className="button button_primary" disabled={!inputValue ? true : false}>
        <FontAwesomeIcon icon={faPlus} /> Add
      </button>
    </form>
  );
};

export default Form;
