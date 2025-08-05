import { ChevronRightIcon, Trash2, CircleCheckBig, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-300 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-500 text-white hover:bg-slate-600 p-2 rounded-md w-full text-left flex ${
              task.isCompleted && "line-through text-green-100"
            }`}
          >
            {task.isCompleted ? (
              <CircleCheckBig className="mr-2 w-4 text-green-500" />
            ) : (
              <Circle className="mr-2 w-4" />
            )}
            {task.title}
          </button>

          <button
            className="bg-slate-500 hover:bg-slate-600 p-2 rounded-md text-white"
            onClick={() => onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </button>

          <button
            className="bg-slate-500 hover:bg-slate-600 hover:text-red-600 p-2 rounded-md text-white"
            onClick={() => onDeleteTaskClick(task.id)}
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
