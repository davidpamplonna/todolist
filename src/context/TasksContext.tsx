import { createContext, useEffect, useState } from "react";


export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksContextData {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

interface TacksProviderProps {
  children: React.ReactNode;
}

export const TasksProvider: React.FC<TacksProviderProps> = ({ children }) => {

     const [tasks, setTasks] = useState([] as Task[]);

     useEffect(() => {
    const tasksOnLocalStorege = localStorage.getItem('tasks');
    if(tasksOnLocalStorege) {
      setTasks(JSON.parse(tasksOnLocalStorege))
    }
  },[])

  return (
    <TasksContext.Provider value={{
        tasks,
        setTasks
    }}>
      {children}
    </TasksContext.Provider>
  );
};
