import { ICard } from "react-app-env";
import { ActionType } from "../action-types/index";
import { Action } from "../actions";
import { courses } from "data/constants";

interface IInitialState {
  cards: Array<ICard>;
}

const initialState: IInitialState = {
  cards: [...courses],
};

const reducer = (state = initialState, action: Action): Array<ICard> => {
  switch (action.type) {
    case ActionType.POPULAR:
      return [];
    case ActionType.FAVOURITE:
      return [];
    case ActionType.NEW:
      return [];
    default:
      return [];
  }
};

export default reducer;
