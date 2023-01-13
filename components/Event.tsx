import type { Event } from "../types";

import styles from "../styles/Home.module.css";

interface Props {
  event: Event;
  eventKey: string;
  handleDeleteEvent: (key: string, id: string) => void;
}

const Event = ({ event, eventKey, handleDeleteEvent }: Props) => {
  return (
    <div
      className={styles.event}
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteEvent(eventKey, event.id);
      }}
    >
      {event.title}
    </div>
  );
};

export default Event;
