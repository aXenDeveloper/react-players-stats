import { useState } from 'react';
import Form from '../components/Form/Form';
import PlayersList from '../components/PlayersList/PlayersList';
import { playerListType } from '../globalTypes';

const HomeView = () => {
  const [playersList, setPlayersList] = useState<playerListType[]>([]);

  return (
    <div className="container">
      <Form playersList={playersList} setPlayersList={setPlayersList} />

      <PlayersList playersList={playersList} />
    </div>
  );
};

export default HomeView;
