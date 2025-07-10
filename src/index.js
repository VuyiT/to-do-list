import "./style.css";
import { Task } from "./tasks";
import { Project } from "./projects";

// CreateTask
const taskOne = new Task("Go to Gym", "15 July 2025", "I like to gym it gives me energy!");
console.log(taskOne);
console.log(taskOne.task);
taskOne.task = "Meet me baby: I like baby";
console.log(taskOne.task)

const project = new Project("Travel to India", "19 October 2025", "I want to see where they make tea and bring back some Assams", "Find out the price of a plane ticket to India");
console.log(project.project);