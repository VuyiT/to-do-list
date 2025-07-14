import { Project } from "./projects";

export class ProgressTracker {
    constructor(project, totalNumberOfTasks) {
        if (project instanceof Project) {
            const projectTasks = project.projectTasks;
            totalNumberOfTasks = projectTasks.length;
            return totalNumberOfTasks; 
        }
        this.totalNumberOfTasks = totalNumberOfTasks;
        this.finishedTasks = 0;
    }

    trackProgress() {
        const remainingTasks = ((this.totalNumberOfTasks - this.finishedTasks) / this.totalNumberOfTasks) * 100;

        const completed = 100 - remainingTasks;

        return completed;
    }
}