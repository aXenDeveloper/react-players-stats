import { playerListType } from '../../../globalTypes';

export type PlayersListItemType = {
  data: playerListType;
  deletePlayer(el: string): void;
};
