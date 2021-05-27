import { playerListType } from '../../globalTypes';

export type FormType = {
  playersList: playerListType[];
  setPlayersList(e: playerListType[]): void;
};
