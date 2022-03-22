import './style.css';
import {addDays} from 'date-fns'
import {Todo, Project} from "./todo-modules.js"
import {newProject, createProjectList, hideProjectList, viewProject, addTask} from "./DOM-interact.js"

const projectArray = [];

projectArray.push(Project('Default'));
projectArray.push(Project('Beans'));
projectArray[0].addSubtask('Title', 'Description', '12/11/2025', 'High', 'False');
projectArray[0].addSubtask('Title', 'Description', '12/11/2025', 'High', 'False');
projectArray[1].addSubtask('Cook Beans', 'Cook Em', '12/11/2025', 'Low', 'False');
createProjectList(projectArray);



const buttonInit = () => {
    hideProjectList();
    const addProjectButton = document.querySelector('#add-project');
    addProjectButton.addEventListener('click', () => {
        newProject(projectArray);
    })
    const addSubtask = document.querySelector('#new-task');
    const taskModule = document.querySelector('.task-module-container');
    addSubtask.addEventListener('click', () => {
            taskModule.classList.remove('hidden');
        })
    const addTaskToProject = document.querySelector('#add-task');
    addTaskToProject.addEventListener('click', () => {
        addTask();
        viewProject();
            taskModule.classList.add('hidden');
        })
     const cancelAddTask = document.querySelector('#cancel');
     cancelAddTask.addEventListener('click', () => {
         taskModule.classList.add('hidden');
     } )   
    
}

buttonInit();


