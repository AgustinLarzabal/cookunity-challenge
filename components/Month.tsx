import styles from "../styles/Home.module.css";

interface Props {
  date: Date;
  handleMonthChange: (offset: number) => void;
}

const Month = ({ date, handleMonthChange }: Props) => {
  return (
    <nav className={styles.nav}>
      <button onClick={() => handleMonthChange(-1)}>←</button>
      {date.toLocaleString("default", { month: "long", year: "numeric" })}
      <button onClick={() => handleMonthChange(1)}>→</button>
    </nav>
  );
};

export default Month;
