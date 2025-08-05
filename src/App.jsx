import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  // AQUI ESTÁ A CRIAÇÃO DO useState() PARA INICIAR COM OBJETOS PRÉ DEFINIDOS
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Esse comentário é a parte que está importando uma API

  // useEffect(() => {
  //   async function fetchTasks() {
  //     // CHAMAR A API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // PEGAR OS DADOS QUE ELA RETORNA
  //     const data = await response.json();

  //     // ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
  //     setTasks(data);
  //   }
  //   fetchTasks();
  // });

  // ESSA PARTE É PARA A FUNÇÃO DE MARCAR SE A ATIVIDADE FOI COMPLETA OU NÃO
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    // o filter vai passar por todos os valores de um array, e precisa de uma condição
    // pra saber se vai adicionar o valor na nova lista ou nao
    // se o valor satisfazer a condição, ele vai ser adicionado
    // se não satisfazer, ele não vai ser adicionado
    // nesse caso, queremos remover o valor que tem o id igual ao taskId
    // aí no final ele seta o novo valor da lista sendo esse q ele adicionou
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  // AQUI É O CORPO DA PÁGINA MESMO
  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

// Não pode retornar mais de um elemento
// Cada função (componente) deve retornar apenas um elemento JSX
