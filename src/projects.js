import { formatISO, differenceInBusinessDays } from "date-fns";

export class Project {
    constructor(title, dueDate, why, goalsOfWeek, weekDay, dailyTasksOfGoals) {
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.why = why;
        this.daysToDueDate = differenceInBusinessDays(
            this.dueDate,
            new Date()
        );
        this.goalsOfWeek = goalsOfWeek;
        this.weekDay = weekDay;
        this.dailyTasksOfGoals = dailyTasksOfGoals;
    }
    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Countdown: ${this.daysToDueDate} days left before due-date
        Goals of Week: ${this.goalsOfWeek}
        ${this.weekDay}:
        ${this.dailyTasksOfGoals}`;
    }
}