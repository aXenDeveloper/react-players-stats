import { FC } from "react";
import style from "./PlayersList.module.scss";
import { playerListType } from "../../globalTypes";
import { PlayersListType } from "./PlayersListTypes";
import PlayersListItem from "./PlayersListItem/PlayersListItem";

const PlayersList: FC<PlayersListType> = ({ playersList, setPlayersList }) => {
  const deletePlayer = (id: string) => {
    const filterPlayersList = playersList.filter(el => el.id !== id);
    setPlayersList(filterPlayersList);
  };

  return (
    <section>
      <h2>Players List</h2>

      {playersList.length > 0 ? (
        <ul className={style.list}>
          {playersList.map((item: playerListType) => (
            <PlayersListItem key={item.id} data={item} deletePlayer={deletePlayer} />
          ))}
        </ul>
      ) : (
        <div className={style.empty}>There are no players yet (╯°□°）╯︵ ┻━┻</div>
      )}
    </section>
  );
};

export default PlayersList;
