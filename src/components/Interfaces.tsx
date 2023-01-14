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
