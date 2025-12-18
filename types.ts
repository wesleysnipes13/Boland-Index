
export type Category = 'Nutrition' | 'Movement' | 'Sleep' | 'Social Connection' | 'Purpose';

export interface Question {
  category: Category;
  text: string;
}

export type Scores = Record<Category, number>;

export interface SavedScore {
  id: string;
  date: string;
  total: number;
  scores: Scores;
}

export interface User {
  email: string;
  history: SavedScore[];
}

export enum AppView {
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  RESULTS = 'RESULTS',
  AUTH = 'AUTH',
}
