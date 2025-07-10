export class ProgressTracker {
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