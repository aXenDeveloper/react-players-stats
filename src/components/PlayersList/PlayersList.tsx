import { FC } from 'react';
import style from './PlayersList.module.scss';
import { playerListType } from '../../globalTypes';
import { PlayersListType } from './PlayersListTypes';

const PlayersList: FC<PlayersListType> = ({ playersList }) => {
  return (
    <section>
      <h1>Players List</h1>

      <ul className={style.list}>
        {playersList.map(({ id, name, score }: playerListType) => (
          <li key={id} className={style.list_item}>
            <div className={style.list_item_content}>
              <span>{name}</span>
              <span>Score: {score}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlayersList;
