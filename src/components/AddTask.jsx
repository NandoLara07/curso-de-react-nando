import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se o título e a descrição estão preenchidos
          if (!title.trim() && !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          } else if (!title.trim()) {
            return alert("Preencha o título da tarefa.");
          } else if (!description.trim()) {
            return alert("Preencha a descrição da tarefa também.");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-600"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
