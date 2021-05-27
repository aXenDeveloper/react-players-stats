import { useState } from 'react';
import Form from '../components/Form/Form';
import { playerListType } from '../globalTypes';

const HomeView = () => {
  const [playersList, setPlayersList] = useState<playerListType[]>([]);

  return (
    <div className="container">
      <Form playersList={playersList} setPlayersList={setPlayersList} />
      <div>HomeView</div>

      <ul>
        {playersList.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeView;
