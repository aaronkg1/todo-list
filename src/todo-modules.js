import { addHours, parseISO } from "date-fns";
export {Project, Todo}


const basicMethods = (state) => {
    const methods = {
setTitle: (newTitle) => state.title = newTitle,
setDescription: (newDescription) => state.description = newDescription,
setDueDate: (newDueDate) =>  state.dueDate = parseISO(newDueDate),
setPriority: (newPriority) =>  state.priority = newPriority,
setCompleted: (boolean) => state.completed = boolean,
}

return methods
}

const projectMethods = (state) => {
    const methods = {
 addSubtask: (title, description, dueDate, priority) => {
     const newSubtask = Todo(title, description, dueDate, priority, 'false');
     state.subTasks.push(newSubtask);
 },
 setTitle: (newTitle) => state.title = newTitle,
}
return methods
}
    
const Todo = (title, description, dueDate, priority, completed) => {
const newTodo = {};
const basics = basicMethods(newTodo);
const composite = Object.assign({}, basics)
composite.setTitle(title);
composite.setDescription(description);
composite.setDueDate(dueDate);
composite.setPriority(priority);
composite.setCompleted(completed);
return Object.assign(composite, newTodo);

}

const Project = (title) => {
    const newProject = { subTasks:[] }
    const methods = projectMethods(newProject);
    const composite = Object.assign({}, methods);
    composite.setTitle(title);
    return Object.assign(composite, newProject);
}
