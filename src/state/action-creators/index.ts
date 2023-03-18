import { ICard } from "react-app-env";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

export const displayPopular = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.POPULAR,
      payload: data,
    });
  };
};

export const displayFavourite = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FAVOURITE,
      payload: data,
    });
  };
};

export const displayNew = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NEW,
      payload: data,
    });
  };
};
