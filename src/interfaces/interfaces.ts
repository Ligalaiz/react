export interface ISearchBar {
  searchRequest: string;
  setSearchRequest: (state: string) => void;
  setItems: (state: IArticles[]) => void;
  sortType: 'relevancy' | 'date' | 'rank';
  pageSize: string;
  pageNumber: string;
  setPageTotal: (state: number) => void;
  setPageNumber: (state: string) => void;
  setError: (state: Error) => void;
  setLoading: (state: boolean) => void;
}

export interface IResponse {
  status: string;
  total_pages: string;
  articles: IArticles[];
  [key: string]: any;
}

export interface IArticles {
  birthday: string;
  experience: string;
  fileCV: string;
  name: string;
  surname: string;
  phone: string;
  letter: string;
  task: string;
  portfolio: string;
  [key: string]: any;
}

export interface IArticlesWraped {
  article: IArticles;
}

export interface IData {
  method: string;
  headers: {
    [key: string]: string;
  };
}

type sort = 'relevancy' | 'date' | 'rank';

export interface ISortBar {
  sortType: sort;
  setSortType: (state: sort) => void;
}

export interface IButton {
  direction: string;
  sortType: boolean;
}

export interface IPageBar {
  items: IArticles[];
  /**
   *  Total pages
   */
  pageTotal: number;
  /**
   *  Pages amount
   */
  pageSize: string;
  setPageSize: (state: string) => void;
  /**
   *  Current page
   */
  pageNumber: string;
  setPageNumber: (state: string) => void;
}

export interface IPageSize {
  /**
   *  Pages amount
   */
  pageSize: string;
  setPageSize: (state: string) => void;
}

export interface IPageNumber {
  pageTotal: number;
  pageNumber: string;
  setPageNumber: (state: string) => void;
}

export interface IPageTotal {
  /**
   *  Total pages
   */
  pageTotal: number;
}

export interface ISearchResult {
  items: IArticles[];
}

export interface ISearchForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchRequest: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
