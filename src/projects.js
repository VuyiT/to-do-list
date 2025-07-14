import { formatISO, differenceInBusinessDays } from "date-fns";
import { ProgressTracker } from "./progress_tracker";
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

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Countdown: ${this.daysToDueDate} days left before due-date
        Progress: ${ProgressTracker.trackProgress}% complete
        Project Tasks: 
        ${this.projectTasks}`;
    }
}