import { ICard } from "react-app-env";
import { ActionType } from "../action-types/index";

interface PopularAction {
  type: ActionType.POPULAR;
  payload: ICard[];
}

interface FavouriteAction {
  type: ActionType.FAVOURITE;
  payload: ICard[];
}

interface NewAction {
  type: ActionType.NEW;
  payload: ICard[];
}

export type Action = PopularAction | FavouriteAction | NewAction;
