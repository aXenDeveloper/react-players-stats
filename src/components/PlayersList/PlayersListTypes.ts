import { playerListType } from '../../globalTypes';

export type PlayersListType = {
  playersList: playerListType[];
  setPlayersList(e: playerListType[]): void;
};
