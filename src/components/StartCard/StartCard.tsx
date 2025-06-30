import styles from './styles.module.scss';

interface StartCardProps {
    title: string;
    value: number;
}

export const StartCard:React.FC<StartCardProps> = ({title, value}) => {
    return (
        <article className={styles.startCard}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    );
}