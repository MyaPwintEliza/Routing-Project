import { ChangeEvent, FormEvent } from "react";

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => (
  <form onSubmit={handleSubmitTodo}>
    <h1 className="text-2xl">To Do List (Home) </h1>
    <input
      className="border p-2 rounded-sm"
      type="text"
      name="task"
      value={task}
      onChange={handleChange}
    />
    <button
      className="broder mx-4 size-10 pb-1 bg-black text-slate-50 rounded-full"
      type="submit"
      aria-lable="Add Todo"
    >
      +
    </button>
  </form>
);
