import styles from "../styles/Home.module.css";

interface Props {
  children: React.ReactNode;
  date: Date;
}

const Calendar = ({ children, date }: Props) => {
  return (
    <div className={styles.calendar}>
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i} className={styles.weekday}>
          {new Date(date.getFullYear(), date.getMonth(), i + 1).toLocaleString(
            "default",
            { weekday: "short" }
          )}
        </div>
      ))}
      {children}
    </div>
  );
};

export default Calendar;
