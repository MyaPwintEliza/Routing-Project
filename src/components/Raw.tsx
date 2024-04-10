type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Raw = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => (
  <div
    className={`flex w-full mt-10 text-slate-50 p-4 mb-2 justify-between items-center rounded-xl ${
      isCompleted ? "bg-slate-600 " : "bg-blue-950 "
    }`}
  >
    <p>{task}</p>
    <div>
      <button
        className="px-4"
        aria-label="Delete a todo"
        onClick={() => handleDeleteTodo(id)}
      >
        Delete
      </button>
      <input
        className=""
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
      />
      Done
    </div>
  </div>
);
