export interface Dog {
  dogID?: string;
  name?: string;
  standLeft?: string;
  standRight?: string;
  headShot?: string;
  url?: string;
  date?: string;
  litterID?: string;
  isBitch?: string;
  place?: string;
  gender?: string;
<<<<<<< HEAD
  regnr?: string;
  colorID?: string;
=======
>>>>>>> parent of 1a6932f... better search kode, refactor and styling
}

export interface Litter {
  sire: string;
  dam: string;
  born: string;
  litterID: string;
}

export interface FaqItem {
  id?: string;
  label?: string;
  content?: string;
}

export interface CountDogs {
  total_dogs: number;
  total_females: number;
  total_males: number;
  total_adults: number;
  total_pups: number;
}

export interface SearchBarProps {
  onSubmit: (search: string) => void;
  onChange: (search: string) => void;
}

export interface FilterProps {
  filters: any;
  filteredData: FilterProps[];
  filterTerm?: FilterProps[];
  onChange: (filter: FilterProps[]) => void;
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}
