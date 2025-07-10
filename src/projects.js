import { formatISO, differenceInBusinessDays } from "date-fns";

class ProgressTracker {
    constructor(totalNumberOfTasks) {
        this.totalNumberOfTasks = totalNumberOfTasks;
        this.finishedTasks = 0;
    }

    trackProgress() {
        const remainingTasks = ((this.totalNumberOfTasks - this.finishedTasks) / this.totalNumberOfTasks) * 100;

        const completed = 100 - remainingTasks;

        return completed;
    }
}

export class Project {
    constructor(title, dueDate, why, projectTasks) {
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.why = why;
        this.daysToDueDate = differenceInBusinessDays(
            this.dueDate,
            new Date()
        );
        this.projectTasks = projectTasks;
    }

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Countdown: ${this.daysToDueDate} days left before due-date
        Progress: ${ProgressTracker.trackProgress}% complete
        Goals of Week: ${this.goalsOfWeek}
        ${this.weekDay}:
        ${this.dailyTasksOfGoals}`;
    }
}