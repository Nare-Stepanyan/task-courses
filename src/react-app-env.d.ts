/// <reference types="react-scripts" />

export interface ICard {
  title: string;
  length: string;
  lessons: string;
  image: string;
  isPopular: boolean;
  isFavourite: boolean;
  date: string;
}

export interface ICardProps {
  title: string;
  length: string;
  lessons: string;
  image: string;
  isPopular: boolean;
  isFavourite: boolean;
  date: string;
}
