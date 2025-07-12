import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { StartCard } from "../StartCard/StartCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
 const {tasks} = useContext(TasksContext);

 const totalTasks = tasks.length;
 const totalPending =  tasks.reduce((total, tasks) =>{

  if(!tasks.done) {
    return total + 1;
  }
  return total
 }, 0)


const totalDone  =  totalTasks - totalPending;



  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* titulo */}
        <div>
          <h1>MyTodo</h1>
          <span>Bem-vindo, David!</span>
        </div>
        {/* cards */}
        <div>
          <StartCard title="Total de Tarefas" value={totalTasks} />
          <StartCard title="Tarefas Pendentes" value={totalPending} />
          <StartCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
