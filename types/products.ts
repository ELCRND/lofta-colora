export interface ICharacteristics {
  base: string;
  glossLevel: number;
  method: string;
  time: number;
  sizes: number[] | string[];
  wet: number;
  temperature: number;
  substance: string;
}

export interface IDate {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
}

export interface IProduct {
  _id: string;
  category: string;
  type: string;
  price: number;
  name: string;
  description: string;
  images: string[];
  characteristics: ICharacteristics;
  date?: string;
}
