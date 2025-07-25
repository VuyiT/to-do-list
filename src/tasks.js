import { formatISO } from "date-fns";

export class Task {
    constructor(title, dueDate, projectTitle, description, priority) {
        this.id = crypto.randomUUID();
        this.title = title;

        if (dueDate) {
            const dateObj = new Date(dueDate);
            if (!isNaN(dateObj.getTime())) {
                this.dueDate = formatISO(dateObj, { representation: "date" });
            } else {
                console.log(`Task recieved an invalid due-date value: "${dueDate}". Setting due-date to null.`);
                this.dueDate = null;
            }
        } else {
            this.dueDate = null;
        }
        this.projectTitle = projectTitle;
        this.description = description;
        this.priority = priority;
        this.completeStatus = false;
    }

    getProjectTitle() {
        return this.projectTitle;
    }

    markTaskAsFinished(taskTitle) {
        const taskIndex = this.projectTasks.findIndex(task => task.title = taskTitle);

        if (taskIndex !== -1) {
            const taskToMove = this.projectTasks[taskIndex];
            taskToMove.completeStatus = true;
            this.finishedTasks.push(taskToMove);

            console.log(`You Finished ${taskToMove.title}`);
            return true;
        }
        console.log((`Could Not Find Task With Title ${taskToMove.title}`));
        return false;
    }

    get task() {
        return `
        Title: ${this.title}
        Due-date: ${this.dueDate}
        Priority: ${this.priority}
        Parent Project: ${this.getProjectTitle()}
        Description: ${this.description}
        `;
    }

    set task(value) {
        [this.title, this.description] = value.split(": ");
        return;
    }
}

