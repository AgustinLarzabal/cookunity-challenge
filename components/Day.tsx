import Event from "./Event";
import type { Event as IEvent } from "../types";

import styles from "../styles/Home.module.css";

interface Props {
  day: number;
  eventKey: string;
  events: Map<string, IEvent> | undefined;
  handleNewEvent: (key: string) => void;
  handleDeleteEvent: (key: string, id: string) => void;
}

const Day = ({
  day,
  eventKey,
  events,
  handleNewEvent,
  handleDeleteEvent,
}: Props) => {
  return (
    <div onClick={() => handleNewEvent(eventKey)} className={styles.day}>
      {day}
      {events && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {Array.from(events.values()).map((event) => (
            <Event
              key={event.id}
              event={event}
              eventKey={eventKey}
              handleDeleteEvent={handleDeleteEvent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Day;
