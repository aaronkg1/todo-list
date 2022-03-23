import {Project, Todo} from "./todo-modules.js";
import {projectArray, activeProject,checkForLocalStorage, saveLocally, oldArray} from "./local-storage.js";
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
       
const emptyProject = document.createElement('div');
emptyProject.classList.add('project');
const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
emptyProject.appendChild(titleInput);
projectList.appendChild(emptyProject);
emptyProject.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
       for (let i=0; i < array.length; i++) {
          if (array[i].title == titleInput.value) {
              alert('Project name already used')
              return
          }
       }
        array.push(Project(titleInput.value));
        
        createListFromLocalStorage();
    }
})
projectList.classList.remove('hidden');
expandButton.textContent = 'expand_more';
}

const checkActiveProject = (array) => {
if (activeProject == undefined || activeProject.title == undefined) {
    activeProject = array[0];
}
else activeProject = array.find(item => item.title === activeProject.title);
}

const createListFromLocalStorage = () => {
    projectList.innerHTML = '';
    checkActiveProject(oldArray);
    oldArray.forEach(projectItem => {
        
        const project = document.createElement('div');
        project.classList.add('project');
        const projectRadioBtn = document.createElement('span');
        projectRadioBtn.classList.add('material-icons-sharp');
        const projectDeleteDiv = document.createElement('div');
        const projectDeleteBtn = document.createElement('span');
        projectDeleteDiv.appendChild(projectDeleteBtn);
        projectDeleteBtn.classList.add('material-icons-sharp');
        projectDeleteDiv.classList.add('hover-appear');
        projectRadioBtn.classList.add('radio-button');
        projectRadioBtn.innerText = 'radio_button_unchecked';
        projectDeleteBtn.innerText = ('delete');
        const projectTitle = document.createElement('p');
        projectTitle.textContent = projectItem.title;
        project.appendChild(projectRadioBtn);
        project.appendChild(projectTitle);
        project.appendChild(projectDeleteDiv);
        projectList.appendChild(project);
        if (projectTitle.textContent == activeProject.title) {
            projectRadioBtn.innerText = 'radio_button_checked';
        }
        project.addEventListener('click', () => {
            const radiobuttons = document.querySelectorAll('.radio-button');
            radiobuttons.forEach(button => {
                button.innerText = 'radio_button_unchecked';
            })
            const projectFromArray = oldArray.find(item => item.title === projectTitle.textContent);
            projectRadioBtn.innerText = 'radio_button_checked';
            activeProject = projectFromArray;
            viewLocalProject();
             
        }) 

        projectDeleteDiv.addEventListener('click', () => {
            deleteProject(projectItem, oldArray);
            saveLocally();
            createListFromLocalStorage();
          
        })

    })
}

const hideProjectList = () => {
    expandButton.addEventListener('click', () => {
        (expandButton.textContent === 'expand_less') ? expandButton.textContent = 'expand_more' : expandButton.textContent = 'expand_less';
        projectList.classList.toggle('hidden');
    })
}

const viewLocalProject = () => {
    const projectTitle = document.querySelector('#project-title');
    projectTitle.textContent = activeProject.title;

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

   if (activeProject.subTasks[0] == null) {
    return;
   }
   else
    activeProject.subTasks.forEach(subtask => {
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
        const taskTitle = subtask.title;
        const taskDescription = subtask.description;
        dueDate.appendChild(datePicker);
        const taskDueDate = subtask.dueDate;
        const taskPriority = subtask.priority;
        title.textContent = taskTitle;
        description.textContent = taskDescription;
        datePicker.value = format(parseISO(taskDueDate), "yyyy-MM-dd'T'HH:mm");
        priorityInput.value = taskPriority;
        checkbox.checked = subtask.completed;
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
            subtask.dueDate = datePicker.value;
            // console.log(datePicker.value);
        })
        priority.addEventListener('change', () => {
            // console.log(priorityInput.value);
            subtask.priority = priorityInput.value;
        } )
        checkbox.addEventListener('change', () => {
            subtask.completed = checkbox.value;
        })
        extendButton.addEventListener('click', () => {
            subtask.extendDueDate();
            datePicker.value = format(subtask.dueDate, 'yyyy-MM-dd\'T\'HH:mm');
            
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

    
    activeProject.subTasks.push(Todo(`${title.value}`, `${description.value}`, `${(dueDate.value)}`, `${priority.value}`, 'false'));
    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '';   
    
}

}

const buttonInit = () => {
    hideProjectList();
    
    addProjectButton.addEventListener('click', () => {
        newProject(oldArray);
    })
    
    addSubtask.addEventListener('click', () => {
            taskModule.classList.remove('hidden');
        })
  
    addTaskToProject.addEventListener('click', () => {
        addTask();
        saveLocally();
        createListFromLocalStorage();
        viewLocalProject();
            taskModule.classList.add('hidden');
        })

     cancelAddTask.addEventListener('click', () => {
         taskModule.classList.add('hidden');
     } )   
    
}

const createDefault = () => {
    if (oldArray[0] == null) {
        saveLocally();
        oldArray.unshift(Project('Default'));
    }
}

const deleteProject = (project, array) => {
   array.forEach(item => {
       if (item.title === project.title) {
           const itemIndex = array.indexOf(item);
           array.splice(itemIndex, 1);
       }
   })
}

createDefault()
createListFromLocalStorage();
viewLocalProject();

