import { formatISO, differenceInBusinessDays } from "date-fns";
import { Task } from "./tasks";

export class Project {
    constructor(title, dueDate, why) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.why = why;
        this.daysToDueDate = differenceInBusinessDays(this.dueDate,new Date());

        this.projectTasks = [];
        this.finishedTasks = [];
    }

    addTask(title, dueDate = null, description, priority) {
        const newTask = new Task(title, dueDate, this.title, description, priority);
        return this.projectTasks.push(newTask);
    }

    listOneProjectTask(taskId) {
        const taskIndex = this.projectTasks.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            const taskToShow = this.projectTasks[taskIndex];
            console.log(`Full picture of Task ${taskToShow.title}`)
            return taskToShow.task;
        }
        console.log(`Could not find task with ID ${taskId}`);
        return false;
    }

    listAllProjectTasks() {
        return this.projectTasks.map(task => {
            const taskName = task.title;
            const taskDueDate = task.dueDate ? `(Due: ${task.dueDate})` : ""; 
            return ` - ${taskName}: ${taskDueDate}`;
        }).join(`\n`);
    }

    trackProjectProgress() {
        const taskList = this.projectTasks;
        const totalNumberOfTasks = taskList.length;
        const numberOfFinishedTasks = this.finishedTasks.length;

        if (totalNumberOfTasks === 0) {
            return 0;
        }

        const remainingTasks = ((totalNumberOfTasks - numberOfFinishedTasks) / totalNumberOfTasks) * 100;

        const completedTasks = 100 - remainingTasks;

        return completedTasks.toFixed(0);
    }

    get project() {
        return `${this.title}
        Due: ${this.dueDate}
        The Why: ${this.why}
        Countdown: ${this.daysToDueDate} days left before due-date
        Progress: ${this.trackProjectProgress()}% complete
        Project Tasks: 
        ${this.listAllProjectTasks()}`;
    }
}