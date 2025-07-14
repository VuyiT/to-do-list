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
    }

    get task() {
        return `${this.title}: ${this.description}`;
    }

    set task(value) {
        [this.title, this.description] = value.split(": ");
        return;
    }
}

