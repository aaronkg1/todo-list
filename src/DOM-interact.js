import {Project} from "./todo-modules.js";
import {projectArray, activeProject, saveLocally, oldArray} from "./local-storage.js";
import { parseISO, format, isDate, isBefore } from "date-fns";

export {buttonInit}

const projectList = document.querySelector('.projects');
const expandButton = document.querySelector('#expand');
const addSubtask = document.querySelector('#new-task');
const taskModule = document.querySelector('.task-module-container');
const addProjectButton = document.querySelector('#add-project');
const cancelAddTask = document.querySelector('#cancel');
const addTaskToProject = document.querySelector('#add-task');


const newProject = (array) => {
    if (localStorage.getItem('array') == null) {
        localStorage.setItem('array', '[]'); 
    }
    
const emptyProject = document.createElement('div');
emptyProject.classList.add('project');
const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
emptyProject.appendChild(titleInput);
projectList.appendChild(emptyProject);
emptyProject.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
       for (let i=0; i < array.length; i++) {
          if (array[i].getTitle() == titleInput.value) {
              alert('Project name already used')
              return
          }
       }


        array.push(Project(titleInput.value));
        
        createProjectList(array);
    }
})
projectList.classList.remove('hidden');
expandButton.textContent = 'expand_more';
}

const createProjectList = (array) => {
    projectList.innerHTML = '';
    activeProject = array[0];
    array.forEach(projectItem => {
        
    const project = document.createElement('div');
    project.classList.add('project');
    const projectRadioBtn = document.createElement('span');
    projectRadioBtn.classList.add('material-icons-sharp');
    projectRadioBtn.classList.add('radio-button');
    projectRadioBtn.innerText = 'radio_button_unchecked';
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectItem.getTitle();
    project.appendChild(projectRadioBtn);
    project.appendChild(projectTitle);
    projectList.appendChild(project);
    if (projectTitle.textContent == activeProject.getTitle()) {
        projectRadioBtn.innerText = 'radio_button_checked';
    }
    project.addEventListener('click', () => {
        const radiobuttons = document.querySelectorAll('.radio-button');
        radiobuttons.forEach(button => {
            button.innerText = 'radio_button_unchecked';
        })
        const projectFromArray = array.find(item => item.getTitle() === projectTitle.textContent);
        projectRadioBtn.innerText = 'radio_button_checked';
        activeProject = projectFromArray;
        viewProject(activeProject);
       
        
    })
    
})
}

const hideProjectList = () => {
    expandButton.addEventListener('click', () => {
        (expandButton.textContent === 'expand_less') ? expandButton.textContent = 'expand_more' : expandButton.textContent = 'expand_less';
        projectList.classList.toggle('hidden');
    })
}

const viewProject = () => {

    const projectTitle = document.querySelector('#project-title');
    projectTitle.textContent = activeProject.getTitle();

    const taskTable = document.querySelector('.project-table');

    taskTable.innerHTML = '';
    addSubtask.classList.remove('hidden');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const taskHead = document.createElement('th');
    taskHead.textContent = 'Task';
    const descriptionHead = document.createElement('th');
    descriptionHead.textContent = 'Description';
    const dateHead = document.createElement('th');
    dateHead.textContent = 'Date';
    const priorityHead = document.createElement('th');
    priorityHead.textContent = 'Priority';
    const completedHead = document.createElement('th');
    completedHead.textContent = 'Completed?';
    const extendDueDate = document.createElement('th');
    extendDueDate.textContent = 'Extend Deadline?';

    tableHead.appendChild(headRow);
    headRow.appendChild(taskHead);
    headRow.appendChild(descriptionHead);
    headRow.appendChild(dateHead);
    headRow.appendChild(priorityHead);
    headRow.appendChild(completedHead);
    headRow.appendChild(extendDueDate);
    taskTable.appendChild(tableHead);

   if (activeProject.getSubtasks()[0] == undefined) {
    return;
   }
   else
    activeProject.getSubtasks().forEach(subtask => {
        const tableRow = document.createElement('tr');
        const title = document.createElement('td')
        const description = document.createElement('td')
        const dueDate = document.createElement('td')
        const datePicker = document.createElement('input');
        datePicker.setAttribute('type', 'datetime-local');
        datePicker.classList.add('date-picker');
        const priority = document.createElement('td');
        const priorityInput = document.createElement('select');
        priorityInput.setAttribute('name', 'priority');
        priorityInput.setAttribute('id', 'lang');
        const optionLow = document.createElement('option');
        optionLow.textContent = 'Low';
        optionLow.value = 'Low';
        const optionMedium = document.createElement('option');
        optionMedium.textContent = 'Medium';
        optionMedium.value = 'Medium';
        const optionHigh = document.createElement('option');
        optionHigh.textContent = 'High';
        optionHigh.value = 'High';
        priorityInput.appendChild(optionLow);
        priorityInput.appendChild(optionMedium);
        priorityInput.appendChild(optionHigh);
        priority.appendChild(priorityInput);
        
        const completed = document.createElement('td'); 
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'subtask');
        checkbox.checked = true|false;
        completed.appendChild(checkbox);
        const taskTitle = subtask.getTitle();
        const taskDescription = subtask.getDescription();
        dueDate.appendChild(datePicker);
        let taskDueDate = format(subtask.getDueDate(), 'yyyy-MM-dd\'T\'HH:mm');
        const taskPriority = subtask.getPriority();
        title.textContent = taskTitle;
        description.textContent = taskDescription;
        datePicker.value = taskDueDate;
        priorityInput.value = taskPriority;
        checkbox.checked = subtask.getCompleted();
        const extendButton = document.createElement('button');
        extendButton.textContent = '1 hour';
        tableRow.appendChild(title);
        tableRow.appendChild(description);
        tableRow.appendChild(dueDate);
        tableRow.appendChild(priority);
        tableRow.appendChild(completed);
        tableRow.appendChild(extendButton);
        taskTable.appendChild(tableRow);

        datePicker.addEventListener('change', () => {
            subtask.setDueDate(datePicker.value);
            console.log(datePicker.value);
        })
        priority.addEventListener('change', () => {
            console.log(priorityInput.value);
            subtask.setPriority(priorityInput.value);
        } )
        checkbox.addEventListener('change', () => {
            subtask.setCompleted(checkbox.value);
        })
        extendButton.addEventListener('click', () => {
            subtask.extendDueDate();
            datePicker.value = format(subtask.getDueDate(), 'yyyy-MM-dd\'T\'HH:mm');
            
        })
    });  
}

const addTask = () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');

    if (isBefore(parseISO(dueDate.value), parseISO(new Date()))) {
        alert('Deadline must be after current time');
    }
    
    else if (isDate(parseISO(dueDate.value))) {
        
    activeProject.addSubtask(`${title.value}`, `${description.value}`, `${dueDate.value}`, `${priority.value}`, 'false');
    console.log(`${title.value}`, `${description.value}`, `${dueDate.value}`, `${priority.value}`, 'false');
    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '';
}

}

const buttonInit = () => {
    hideProjectList();
    
    addProjectButton.addEventListener('click', () => {
        newProject(projectArray);
    })
    
    addSubtask.addEventListener('click', () => {
            taskModule.classList.remove('hidden');
        })
  
    addTaskToProject.addEventListener('click', () => {
        addTask();
        viewProject();
            taskModule.classList.add('hidden');
        })

     cancelAddTask.addEventListener('click', () => {
         taskModule.classList.add('hidden');
     } )   
    
}


projectArray.push(Project('Default'));
projectArray.push(Project('Beans'));
projectArray[0].addSubtask('Annoy Rohan', 'Tell him COD is the best game ever made', '2022-03-26T15:24', 'High', 'False');
projectArray[1].addSubtask('Cook Beans', 'Cook Em', '2022-03-26T15:24', 'Low', 'False');
createProjectList(projectArray);
viewProject(projectArray[0]);