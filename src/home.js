 export class CreateTask {
    constructor(title, description) {
        this.title = title;
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
