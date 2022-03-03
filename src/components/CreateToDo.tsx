import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, categoryState } from "./Atoms";
import { IForm } from "./Interfaces";

const Form = styled.form`
  display: flex;
  width: 200px;
  flex-direction: column;
`;

function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    const saveToDo = { id: Date.now(), text: data.toDo, category };
    setToDos((prev) => [saveToDo, ...prev]);
    setValue("toDo", "");
    localStorage.setItem("toDos", JSON.stringify([saveToDo, ...toDos]));
  };
  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "To do is required" })}
        placeholder="Write a to do"
      />
      <span>{errors?.toDo?.message}</span>
      <button>Add</button>
    </Form>
  );
}

export default CreateToDo;
