export class Schedule {
  constructor() {
    this.schedule = {
      lundi: "11:30a.m.-8p.m.",
      mardi: "11:30a.m.-8p.m.",
      mercredi: "11:30a.m.-8p.m.",
      jeudi: "11:30a.m.-9p.m.",
      vendredi: "11:30a.m.-9p.m.",
      samedi: "11:30a.m.-10p.m.",
      dimanche: "11:30a.m.-8p.m.",
    };
  }

  createSchedule(classContainer) {
    let scheduleContainer = document.createElement("div");
    scheduleContainer.classList.add("contact-schedule-container");
    classContainer.appendChild(scheduleContainer);
    // week days
    let weekDaysList = document.createElement("ul");
    scheduleContainer.appendChild(weekDaysList);
    weekDaysList.classList.add("contact-schedule-week-days-list");
    // opening and closing time
    let timeList = document.createElement("ul");
    scheduleContainer.appendChild(timeList);
    timeList.classList.add("contact-schedule-time-list");
    // insert each day and time from schedule in respective list
    for (let [weekDay, time] of Object.entries(this.schedule)) {
      // day
      let dayElement = document.createElement("li");
      dayElement.innerHTML = weekDay;
      weekDaysList.appendChild(dayElement);
      // time
      let timeElement = document.createElement("li");
      timeElement.innerHTML = time;
      timeList.appendChild(timeElement);
    }
  }
}
