import { FormikErrors, FormikTouched } from 'formik';

export interface IAgreementField {
  agreement: boolean;
  handleClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ICardApp {
  fileCV: any[] | null;
  letter: any[] | null;
  task: any[] | null;
  portfolio: any[] | null;
  name: string;
  surname: string;
  birthday: string;
  experience: string;
  phone: string;
  agreement: boolean;
}

export interface ICard {
  index: number;
  card: ICardApp;
}

export interface IBirthdayField {
  birthday: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IDataField {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  maxLength: string | number | undefined;
  minLength?: string | number | undefined;
  type: string;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  touched: FormikTouched<ICardApp>;
  errors: FormikErrors<ICardApp>;
}

export interface IShow {
  visibility: 'visible' | 'hidden' | undefined;
  color: string;
}

export interface ITitle {
  name: string;
  surname: string;
  phone: string;
  [key: string]: string;
}

export interface ITitleFile {
  fileCV: string;
  portfolio: string;
  letter: string;
  task: string;
  [key: string]: string | undefined;
}

export interface IFileField {
  fieldErrors: any;
  name: string;
  values: ICardApp;
}

export interface IForm {
  cards: ICardApp[];
  setCards: (state: ICardApp[]) => void;
  setMessage: (value: boolean) => void;
}

export interface IFormBtn {
  isValid: boolean;
  dirty: boolean;
}

export interface ISelectField {
  experience: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISwitchField {
  mode: boolean;
  handleModeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
