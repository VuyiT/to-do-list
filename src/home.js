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

class Priority {
    constructor(critical, high, medium, low, lowest) {
        this.critical = critical;
        this.high = high;
        this.medium = medium;
        this.low = low;
        this.lowest = lowest;
    }

    get priority() {
        //this is supposed to come out as a list
        
    }
}