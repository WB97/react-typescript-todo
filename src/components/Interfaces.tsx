import { Categories } from "./Atoms";

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export interface IForm {
  toDo: string;
  name: string;
}
