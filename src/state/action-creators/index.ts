import { ICard } from "react-app-env";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";

export const displayPopular = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    const popularCourses = data.filter((course) => course.isPopular);
    dispatch({
      type: ActionType.POPULAR,
      payload: popularCourses,
    });
  };
};

export const displayFavourite = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    const favouriteCourses = data.filter((course) => course.isFavourite);

    dispatch({
      type: ActionType.FAVOURITE,
      payload: favouriteCourses,
    });
  };
};

export const displayNew = (data: ICard[]) => {
  return (dispatch: Dispatch<Action>) => {
    const newCourses = data.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
    dispatch({
      type: ActionType.NEW,
      payload: newCourses,
    });
  };
};
