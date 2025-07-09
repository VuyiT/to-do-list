import { format, startOfWeek, endOfWeek } from "date-fns";

export class Project {
    constructor(title, dueDate, why, weeksToGoInTheYear, goalsOfWeek, weekDay, dailyTasksOfGoals) {
        this.title = title;
        this.dueDate = format(new Date(dueDate), "dd/MM/yyyy");
        this.why = why;
        this.weekOfYear = format(new Date(), "ww");
        this.weeksToGoInTheYear = weeksToGoInTheYear;
        this.goalsOfWeek = goalsOfWeek;
        this.weekDay = weekDay;
        this.dailyTasksOfGoals = dailyTasksOfGoals;
    }

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Current Week of Year: Week ${this.weekOfYear} (${this.startOfWeek} - ${this.endOfWeek}) (${this.weeksToGoInTheYear} weeks left before goal expires)
        Goals of Week: ${this.goalsOfWeek}
        ${this.weekDay}:
        ${this.dailyTasksOfGoals}`;
    }
}