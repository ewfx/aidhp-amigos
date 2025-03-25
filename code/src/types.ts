export type transaction = {
  _id: string;
  customerId: string;
  name: string;
  age: string;
  gender: string;
  location: string;
  interests: string;
  preferences: string;
  income: string;
  $vectorize: string;
  $vector: Array<number>;
  education: string;
};

export type Similartransaction = {
  $similarity: number;
} & transaction;
