import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen bg-slate-600 p-6">
      <div className="max-w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 mb-6 text-slate-100 hover:text-slate-950"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md space-y-2 w-full">
          <h2 className="text-xl text-slate-700 font-bold break-words">
            {title}
          </h2>
          <p className="text-slate-700 break-words">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
