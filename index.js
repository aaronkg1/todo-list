const basicMethods = (state) => {
    const methods = {
setTitle: (newTitle) => state.title = newTitle,
setDescription: (newDescription) => state.description = newDescription,
setDueDate: (newDueDate) =>  state.dueDate = newDueDate,
setPriotity: (newPriority) =>  state.priority = newPriority,
addNotes: (newNotes) => state.notes = newNotes,
getTitle: () => state.title,
getDescription: () => state.description,
getDueDate: () => state.dueDate,
getPriority: () =>  state.priority,
setNotes: () => state.notes,
setCompleted: () => state.completed = true,
toggleCompleted: () => state.completed = !state.completed,
}

return methods
}

const projectMethods = (state) => {
    const methods = {
 addSubtask: (title, description, dueDate, priority, notes) => {
     const newSubtask = Todo(title, description, dueDate, priority, notes);
     state.subTasks.push(newSubtask);
 },
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
    
const Todo = (title, description, dueDate, priority, notes, completed) => {
const newTodo = {};
const basics = basicMethods(newTodo);
const composite = Object.assign({}, basics)
composite.setTitle(title);
composite.setDescription(description);
composite.setDueDate(dueDate);
composite.setPriotity(priority);
composite.setNotes(notes);
return Object.assign(composite, newTodo);

}

const Project = (title, description, dueDate, priority, notes) => {
    const newProject = { subTasks:[] }
    const basics = basicMethods(newProject);
    const additionalMethods = projectMethods(newProject);
    const composite = Object.assign({}, basics, additionalMethods);
    composite.setTitle(title);
    composite.setDescription(description);
    composite.setDueDate(dueDate);
    composite.setPriotity(priority);
    composite.setNotes(notes);
    return Object.assign(composite, newProject);
}

const defaultProject = Project('Default', 'Default project', 'Now', '0', 'Start adding tasks with the addSubtask method' );
defaultProject.addSubtask('Wake Up', 'Get out of bed', 'When the alarm goes off', '0', 'Stop being lazy');
defaultProject.addSubtask('Brush Teeth');
defaultProject.addSubtask('Eat Breakfast');

defaultProject.setTitle('Test')

const wakeUp = Project('Default', 'Default project', 'Now', '0', 'Start adding tasks with the addSubtask method' );
wakeUp.addSubtask('Wake Up', 'Get out of bed', 'When the alarm goes off', '0', 'Stop being lazy');
wakeUp.addSubtask('Brush Teeth');
wakeUp.addSubtask('Eat Breakfast');