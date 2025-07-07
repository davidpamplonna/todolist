import { StartCard } from "../StartCard/StartCard";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
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
          <StartCard title="Total de Tarefas" value={5} />
          <StartCard title="Tarefas Pendentes" value={5} />
          <StartCard title="Tarefas Concluídas" value={1} />
        </div>
      </div>
    </header>
  );
};
