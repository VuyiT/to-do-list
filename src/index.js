import "./style.css";
import { CreateTask } from "./home";

// CreateTask
const taskOne = new CreateTask("Go to Gym", "I like to gym it gives me energy!");
console.log(taskOne);
console.log(taskOne.task);
CreateTask.task = "Meet me baby: I like baby"; //here I am sort of replicating the static properties. They act on the class itself, whereas everything else acts on the insatnce of the class
taskOne.task = "Meet me baby: I like baby";
console.log(taskOne.task)