import "./style.css";
import { Task } from "./tasks";
import { Project } from "./projects";

// CreateTask
const taskOne = new Task("Go to Gym", "15 July 2025", "I like to gym it gives me energy!");
console.log(taskOne);
console.log(taskOne.task);
taskOne.task = "Meet me baby: I like baby";
console.log(taskOne.task)

const project = new Project("Travel to India", "19 October 2025", "I want to see where they make tea and bring back some Assams");
const taskTwo = new Task("Leave Work", "16 October 2025", project, "I have to go home man");
const taskThree = new Task("Go Home", "16 October 2025", project, "I have to go home man");
const taskFour = new Task("Loop", "16 October 2025", project, "I have to go home man");
console.log(project.project);

console.log(project.projectTasks)

console.log(project.listProjectTasks());
