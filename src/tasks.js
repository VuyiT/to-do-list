import { formatISO } from "date-fns";

export class Task {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = formatISO(new Date(dueDate), { representation: "date"});
        this.description = description;
    }

    get task() {
        return `${this.title}: ${this.description}`;
    }

    set task(value) {
        [this.title, this.description] = value.split(": ");
        return;
    }
}