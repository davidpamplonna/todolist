import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {

    const [taskTitle, setTaskTitle] = useState('');

    const {tasks, setTasks} = useContext(TasksContext);

  function handleSubmitAddTask(event: FormEvent){
    event.preventDefault();
        
    if(taskTitle.length < 3) {
      alert ('Não é possível adicionar uma tarefa com menos de 3 letras')
      return
    }

    // adicionar a tarefa
    const newTasks = [
      ...tasks,
      {
        id: Math.random(),
        title: taskTitle,
        done: false
      },
    ]
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setTaskTitle ('')
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
       if (task.id === taskId) {
        return{
          ...task,
          done: !task.done
        }
    }
      return task;
    })

    setTasks(newTasks);
  }


  function handleRemoveTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
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
              <input
              type="checkbox" id={`tasks-${tasks.id}`} onChange={() => handleToggleTaskStatus (tasks.id)}/>
              <label htmlFor={`tasks-${tasks.id}`} className={tasks.done ? styles.done : ''}>{tasks.title}</label>

              <button onClick={() => handleRemoveTask(tasks.id)}>Remover</button>
            </li>
          )
        })}
      </ul>
    </section>
  );
};
