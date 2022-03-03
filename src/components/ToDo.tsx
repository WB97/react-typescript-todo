import { IToDo } from "./Interfaces";
import { useSetRecoilState } from "recoil";
import { Categories, toDoState } from "./Atoms";
import React from "react";

function ToDo(todo: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory: Categories) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(
        (targetToDo) => targetToDo.id === todo.id
      );
      const newToDo: IToDo = {
        text: todo.text,
        id: todo.id,
        category: newCategory,
      };
      oldToDos = [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
      localStorage.setItem("toDos", JSON.stringify(oldToDos));
      return oldToDos;
    });
  };
  const deleteToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(
        (targetToDo) => targetToDo.id === todo.id
      );
      oldToDos = oldToDos.filter(
        (todo) => todo.id !== oldToDos[targetIndex].id
      );
      localStorage.setItem("toDos", JSON.stringify(oldToDos));
      return oldToDos;
    });
  };

  return (
    <li>
      <span>{todo.text}</span>
      {todo.category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {todo.category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {todo.category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={deleteToDo}>Del</button>
    </li>
  );
}

export default ToDo;
