import { formatISO, differenceInBusinessDays } from "date-fns";
import { Task } from "./tasks";

export class Project {
    constructor(title, dueDate, why, projectTasks) {
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.why = why;
        this.daysToDueDate = differenceInBusinessDays(this.dueDate,new Date());

        projectTasks = [];
        if (projectTasks instanceof Task) {
            const newTask = new Task();
            return newTask.title;
        }
        this.projectTasks = projectTasks;
    }

    listProjectTasks() {
        return this.projectTasks.join(`\n`);
    }

    showProjectProgress() {
        const numberOfTasks = this.projectTasks;
        const totalNumberOfTasks = numberOfTasks.length;
        let finishedTasks = 0;

        const remainingTasks = ((totalNumberOfTasks - finishedTasks) / totalNumberOfTasks) * 100;

        const completedTasks = 100 - remainingTasks;

        return completedTasks;
    }

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Countdown: ${this.daysToDueDate} days left before due-date
        Progress: ${this.showProjectProgress()}% complete
        Project Tasks: 
        ${this.listProjectTasks()}`;
    }
}