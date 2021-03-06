import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import style from './PlayersListItem.module.scss';
import { PlayersListItemType } from './PlayersListItemTypes';

const PlayersListItem: FC<PlayersListItemType> = ({ data, deletePlayer }) => {
  const { id, name, score } = data;

  const scoreColorItem = (scoreItem: number) => {
    if (scoreItem <= 100) return style.item_red;
    return style.item_green;
  };

  return (
    <li className={`${style.item} ${scoreColorItem(score)}`}>
      <div className={style.item_content}>
        <span className={style.item_content_name}>{name}</span>

        <div>
          <button className="button button_light" onClick={() => deletePlayer(id)}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>

      <div className={style.item_score}>
        <span>Score</span>
        <span>{score}</span>
      </div>
    </li>
  );
};

export default PlayersListItem;
