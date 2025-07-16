import { formatISO } from "date-fns";
import { Project } from "./projects";

export class Task {
    constructor(title, dueDate, project, description, priority) {
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.description = description;
        
        if (project instanceof Project) {
            project = project.projectTasks;
            return project.push(this.title);
        }
        this.project = project;
        this.completeStatus = false;
    }

    markTaskAsFinished(taskTitle) {
        const taskIndex = this.projectTasks.findIndex(task => task.title = taskTitle);

        if (taskIndex !== -1) {
            const taskToMove = this.projectTasks[taskIndex];
            taskToMove.completeStatus = true;
            this.finishedTasks.push(taskToMove);

            console.log(`You Finished ${taskToMove.title}`);
            return true
        }
        console.log((`Could Not Find Task With Title ${taskToMove.title}`));
        return false;
    }

    get task() {
        return `${this.title}: ${this.description}`;
    }

    set task(value) {
        [this.title, this.description] = value.split(": ");
        return;
    }
}

