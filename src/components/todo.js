import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import {
  Container,
  NewTaskContainer,
  NewTaskButton,
  TasksContainer,
  TaskItem,
  LimparTudo,
  TitleToDo
 
} from "../styles/styles";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  
  
    
  }`;

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };
  return (
    <>
      <GlobalStyle />

      <Container>
        <TitleToDo>ToDo App</TitleToDo>
        <NewTaskContainer>
          <input
            name="task"
            type="text"
            value={task}
            placeholder="Adicione tarefas..."
            className="inputBox"
            onChange={(e) => setTask(e.target.value)}
          />

          <NewTaskButton>
            <button className="estiloAdd" onClick={addTask}>
              add
            </button>
          </NewTaskButton>
        </NewTaskContainer>

        <div>
          Você está
          {!tasks.length
            ? " sem tarefas"
            : tasks.length === 1
            ? " 1 tarefa"
            : tasks.length > 1
            ? ` ${tasks.length} tarefas`
            : null}
        </div>
        <TasksContainer>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <TaskItem>
                <div>
                  <span>{task.title}</span>
                </div>

                <div>
                  <button
                    className="BotaoDeletar"
                    onClick={() => handleDelete(task)}
                  >
                    delete
                  </button>
                </div>
              </TaskItem>
            </React.Fragment>
          ))}
        </TasksContainer>

        {!tasks.length ? null : (
          <LimparTudo>
            <button className="botaoLimpeza" onClick={() => handleClear()}>
              Limpar
            </button>
          </LimparTudo>
        )}
      </Container>
    </>
  );
}
