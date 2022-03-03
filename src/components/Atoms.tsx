import { Interface } from "readline";
import { atom, selector } from "recoil";
import { IToDo } from "./Interfaces";

const getLocalToDos = localStorage.getItem("toDos");

export enum Categories {
  TO_DO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: getLocalToDos ? JSON.parse(getLocalToDos) : [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    if (category === Categories.TO_DO) {
      return toDos.filter((toDo) => toDo.category === Categories.TO_DO);
    } else if (category === Categories.DOING) {
      return toDos.filter((toDo) => toDo.category === Categories.DOING);
    } else if (category === Categories.DONE) {
      return toDos.filter((toDo) => toDo.category === Categories.DONE);
    } else {
      return null;
    }
  },
});
