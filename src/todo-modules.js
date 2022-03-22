export {Todo, Project}


const basicMethods = (state) => {
    const methods = {
setTitle: (newTitle) => state.title = newTitle,
setDescription: (newDescription) => state.description = newDescription,
setDueDate: (newDueDate) =>  state.dueDate = newDueDate,
setPriority: (newPriority) =>  state.priority = newPriority,
getTitle: () => state.title,
getDescription: () => state.description,
getDueDate: () => state.dueDate,
getPriority: () =>  state.priority,
initCompleted: () => state.completed = false,
toggleCompleted: () => state.completed = !state.completed,
}

return methods
}

const projectMethods = (state) => {
    const methods = {
 addSubtask: (title, description, dueDate, priority) => {
     const newSubtask = Todo(title, description, dueDate, priority, 'false');
     state.subTasks.push(newSubtask);
 },
 getSubtasks: () => state.subTasks,
 setTitle: (newTitle) => state.title = newTitle,
 getTitle: () => state.title,
 removeSubtask: (title) => {
     state.subTasks.forEach(subTask => {
         if (subTask.getTitle() === title) {
             let index = state.subTasks.indexOf(subTask)
             state.subTasks.splice(index, 1);
         }
     });
 }
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
return Object.assign(composite, newTodo);

}

const Project = (title) => {
    const newProject = { subTasks:[] }
    const methods = projectMethods(newProject);
    const composite = Object.assign({}, methods);
    composite.setTitle(title);
    return Object.assign(composite, newProject);
}
