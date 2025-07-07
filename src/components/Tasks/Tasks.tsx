import { FormEvent, useState } from "react";
import styles from "./styles.module.scss";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const Tasks: React.FC = () => {

    const [taskTitle, setTaskTitle] = useState('');
    const [tasks, setTasks] = useState([] as Task[]);

  function handleSubmitAddTask(event: FormEvent){
    event.preventDefault();
        
    if(taskTitle.length < 3) {
      alert ('Não é possível adicionar uma tarefa com menos de 3 letras')
      return
    }

    // adicionar a tarefa
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        title: taskTitle,
        done: false
      },
    ])
    setTaskTitle ('')
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="">Adicionar Tarefa</label>
          <input 
          type="text" 
          value={taskTitle}
          onChange={(event) => setTaskTitle(event.target.value)}
          id="tasks-title" 
          placeholder="Título da Tarefa" />
        </div>
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul>
        { tasks.map((tasks) => {
          return (
            <li
            key={tasks.id}
            > 
              <input type="checkbox" id={`tasks-${tasks.id}`}/>
              <label htmlFor={`tasks-${tasks.id}`}>{tasks.title}</label>
            </li>
          )
        })}
      </ul>
    </section>
  );
};
