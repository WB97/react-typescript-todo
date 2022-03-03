import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, categoryState, toDoSelector, Categories } from "./Atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
`;

function ToDoList() {
  const selectList = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const newCategory = event.currentTarget.value as any;
    setCategory(newCategory);
  };
  return (
    <div>
      <CreateToDo />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <ul>
        {selectList?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
