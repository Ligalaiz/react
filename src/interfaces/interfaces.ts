export interface IApartmentTable {
  apartments: IApartment[];
  petsAllowed: boolean;
  filterText: string;
}

export interface IApartment {
  name: string;
  pets: boolean;
  image: string;
  description: string;
  price: string;
  rating: number | null;
  reviews: number | null;
  [key: string]: number | string | boolean | null;
}

export interface ICard {
  apartment: {
    name: string;
    pets: boolean;
    image: string;
    description: string;
    price: string;
    rating: number | null;
    reviews: number | null;
    [key: string]: number | string | boolean | null;
  };
}

export interface ISearchBar {
  filterText: string;
  petsAllowed: boolean;
  onSearchValue: (value: string) => void;
  onCheckboxValue: (value: boolean) => void;
}

export interface ISearchBtn {
  /**
   *  Disabled status
   */
  disabled: boolean;
  [key: string]: string | boolean;
}

export interface ISearchCheckbox {
  /**
   *  Filter toggle
   */
  petsAllowed: boolean;
  /**
   *  Filter toggle handler
   */
  handleCheckboxChange: (value: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ISearchField {
  /**
   *  Search request
   */
  filterText: string;
  /**
   *  Checking length request
   */
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
