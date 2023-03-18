import { courses } from "data/constants";
import { ICard } from "react-app-env";
import { ActionType } from "../action-types/index";
import { Action } from "../actions";

interface IInitialState {
  cards: ICard[];
}

const initialState: IInitialState = {
  cards: [...courses],
};

const reducer = (state = initialState, action: Action): Array<ICard> => {
  switch (action.type) {
    case ActionType.POPULAR:
      return (state.cards = [...action.payload]);
    case ActionType.FAVOURITE:
      return (state.cards = [...action.payload]);
    case ActionType.NEW:
      return (state.cards = [...action.payload]);
    default:
      return state.cards;
  }
};

export default reducer;
