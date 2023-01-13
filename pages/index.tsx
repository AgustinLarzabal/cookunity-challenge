import { useState } from "react";
import type { Schedule } from "../types";

import Calendar from "../components/Calendar";
import Day from "../components/Day";
import Month from "../components/Month";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [date, setDate] = useState<Date>(() => new Date());
  const [schedule, setSchedule] = useState<Schedule>(() => new Map());

  function handleMonthChange(offset: number) {
    const draft = new Date(date);

    draft.setMonth(date.getMonth() + offset);

    setDate(draft);
  }

  function handleNewEvent(key: string) {
    const draft = new Map(schedule);

    if (!draft.has(key)) {
      draft.set(key, new Map());
    }

    const day = draft.get(key)!;
    const id = String(Date.now());
    const title = window.prompt("Event title");

    if (!title) return;

    day.set(id, {
      id,
      title,
    });

    setSchedule(draft);
  }

  function handleDeleteEvent(key: string, id: string) {
    const draft = new Map(schedule);
    const day = draft.get(key)!;

    day.delete(id);

    setSchedule(draft);
  }

  return (
    <main>
      <Month date={date} handleMonthChange={handleMonthChange} />
      <Calendar date={date}>
        {Array.from(
          {
            length: new Date(
              date.getFullYear(),
              date.getMonth() + 1,
              0
            ).getDate(),
          },
          (_, i) => {
            const eventKey = `${date.getFullYear()}/${date.getMonth()}/${
              i + 1
            }`;
            const events = schedule.get(eventKey);

            return (
              <Day
                day={i + 1}
                key={i}
                eventKey={eventKey}
                events={events}
                handleNewEvent={handleNewEvent}
                handleDeleteEvent={handleDeleteEvent}
              />
            );
          }
        )}
      </Calendar>
    </main>
  );
}
