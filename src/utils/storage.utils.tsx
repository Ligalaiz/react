import { IArticles } from '@src/interfaces';

export const set = (name: string, value: any): void =>
  window.localStorage.setItem(name, JSON.stringify(value));

export const get = (name: string): IArticles[] | null => {
  const result = localStorage.getItem(name);
  return result ? JSON.parse(result) : null;
};

export const del = (name: string): void => localStorage.removeItem(name);
