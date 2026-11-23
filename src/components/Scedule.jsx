import { useState } from "react";

const days = [
  {
    id: "deu",
    short: "Δευ",
    name: "Δευτέρα",
    classes: [
      { time: "09:00", type: "mat", title: "Mat", level: "Αρχάριοι" },
      {
        time: "10:30",
        type: "egkyes",
        title: "Εγκυμοσύνης",
        level: "Όλα τα επίπεδα",
      },
      { time: "18:00", type: "reformer", title: "Reformer", level: "Αρχάριοι" },
      {
        time: "19:30",
        type: "reformer",
        title: "Reformer",
        level: "Προχωρημένοι",
      },
    ],
  },
  {
    id: "tri",
    short: "Τρί",
    name: "Τρίτη",
    classes: [
      {
        time: "09:00",
        type: "reformer",
        title: "Reformer",
        level: "Όλα τα επίπεδα",
      },
      { time: "18:00", type: "mat", title: "Mat", level: "Όλα τα επίπεδα" },
      { time: "19:30", type: "yoga", title: "Yoga", level: "Όλα τα επίπεδα" },
    ],
  },
  {
    id: "tet",
    short: "Τετ",
    name: "Τετάρτη",
    classes: [
      { time: "09:00", type: "mat", title: "Mat", level: "Αρχάριοι" },
      {
        time: "10:30",
        type: "egkyes",
        title: "Εγκυμοσύνης",
        level: "Όλα τα επίπεδα",
      },
      { time: "18:00", type: "reformer", title: "Reformer", level: "Αρχάριοι" },
      {
        time: "19:30",
        type: "reformer",
        title: "Reformer",
        level: "Προχωρημένοι",
      },
    ],
  },
  {
    id: "pem",
    short: "Πέμ",
    name: "Πέμπτη",
    classes: [
      {
        time: "09:00",
        type: "reformer",
        title: "Reformer",
        level: "Όλα τα επίπεδα",
      },
      { time: "18:00", type: "mat", title: "Mat", level: "Όλα τα επίπεδα" },
      { time: "19:30", type: "yoga", title: "Yoga", level: "Όλα τα επίπεδα" },
    ],
  },
  {
    id: "par",
    short: "Παρ",
    name: "Παρασκευή",
    classes: [
      { time: "09:00", type: "yoga", title: "Yoga", level: "Όλα τα επίπεδα" },
      { time: "10:30", type: "mat", title: "Mat", level: "Αρχάριοι" },
      { time: "18:00", type: "reformer", title: "Reformer", level: "Αρχάριοι" },
      { time: "19:30", type: "mat", title: "Mat", level: "Προχωρημένοι" },
    ],
  },
  {
    id: "sav",
    short: "Σάβ",
    name: "Σάββατο",
    classes: [
      {
        time: "09:00",
        type: "reformer",
        title: "Reformer",
        level: "Όλα τα επίπεδα",
      },
      { time: "10:30", type: "mat", title: "Mat", level: "Όλα τα επίπεδα" },
    ],
  },
];
const times = ["09:00", "10:30", "18:00", "19:30"];
function Schedule() {
  const [activeDay, setActiveDay] = useState("deu");
  const day = days.find((d) => d.id === activeDay);

  return (
    <section className="schedule" id="programma">
      <div className="wrap">
        <h2 className="section-title">Πρόγραμμα μαθημάτων</h2>
        <p className="section-sub">
          Όλα τα τμήματα έως 6 άτομα. Κάθε μάθημα διαρκεί 55 λεπτά.
        </p>
        <div className="sched-table">
          <table>
            <thead>
              <tr>
                <th>Ώρα</th>
                {days.map((d) => (
                  <th key={d.id}>{d.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => (
                <tr key={time}>
                  <th>{time}</th>
                  {days.map((d) => {
                    const c = d.classes.find((item) => item.time === time);
                    return (
                      <td key={d.id}>
                        {c ? (
                          <span className={"slot c-" + c.type}>
                            <b>{c.title}</b>
                            <span>{c.level}</span>
                          </span>
                        ) : (
                          <span className="slot empty">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sched-mobile">
          <div className="day-tabs" role="tablist">
            {days.map((d) => (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={d.id === activeDay}
                onClick={() => setActiveDay(d.id)}
              >
                {d.short}
              </button>
            ))}
          </div>

          <div className="day-panel" role="tabpanel">
            <h3>{day.name}</h3>
            <ul>
              {day.classes.map((c) => (
                <li key={c.time}>
                  <span className="time">{c.time}</span>
                  <span className={"slot c-" + c.type}>
                    <b>{c.title}</b>
                    <span>{c.level}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
