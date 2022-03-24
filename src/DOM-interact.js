import {Project, Todo} from "./todo-modules.js";
import {projectArray, activeProject,checkForLocalStorage, saveLocally, oldArray} from "./local-storage.js";
import { parseISO, format, isValid, addHours, isToday, isPast} from "date-fns";

export {buttonInit}

const projectList = document.querySelector('.projects');
const expandButton = document.querySelector('#expand');
const addSubtask = document.querySelector('#new-task');
const taskModule = document.querySelector('.task-module-container');
const addProjectButton = document.querySelector('#add-project');
const cancelAddTask = document.querySelector('#cancel');
const addTaskToProject = document.querySelector('#add-task');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const dueDate = document.querySelector('#due-date');
const priority = document.querySelector('#priority');
const projectTitle = document.querySelector('#project-title');
const errorMessages = document.querySelector('#error-messages')
const taskTable = document.querySelector('.project-table');
const todayTab = document.querySelector('#today');


const newProject = (array) => {
       
const emptyProject = document.createElement('div');
emptyProject.classList.add('project');
const titleInput = document.createElement('input');
titleInput.setAttribute('type', 'text');
const addProjectSymbol = document.createElement('span');
addProjectSymbol.classList.add('material-icons-sharp');
addProjectSymbol.textContent = 'add';
emptyProject.appendChild(titleInput);
emptyProject.appendChild(addProjectSymbol);
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
        saveLocally();
        createListFromLocalStorage();
    }


})
addProjectSymbol.addEventListener('click', () => {
       for (let i=0; i < array.length; i++) {
          if (array[i].title == titleInput.value) {
              alert('Project name already used')
              return
          }
       }
    array.push(Project(titleInput.value));  
    saveLocally();   
    createListFromLocalStorage();  
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
        projectRadioBtn.addEventListener('click', () => {
            
            const projectFromArray = oldArray.find(item => item.title === projectTitle.textContent);
                activeProject = projectFromArray;
            viewLocalProject();
            const radiobuttons = document.querySelectorAll('.radio-button');
            radiobuttons.forEach(button => {
                button.innerText = 'radio_button_unchecked';
                projectRadioBtn.innerText = 'radio_button_checked';   
        }) 
    })
        projectTitle.addEventListener('click', () => {
            const projectFromArray = oldArray.find(item => item.title === projectTitle.textContent);
                activeProject = projectFromArray;
            viewLocalProject();
            const radiobuttons = document.querySelectorAll('.radio-button');
            radiobuttons.forEach(button => {
                button.innerText = 'radio_button_unchecked';
                projectRadioBtn.innerText = 'radio_button_checked';
        })
    })

        projectDeleteDiv.addEventListener('click', () => {
            deleteProject(projectItem, oldArray);
            saveLocally();
            activeProject = oldArray[0];
            createListFromLocalStorage();
          
        })
    
    })

}


const toggleProjectList = () => {
    expandButton.addEventListener('click', () => {
        (expandButton.textContent === 'expand_less') ? expandButton.textContent = 'expand_more' : expandButton.textContent = 'expand_less';
        projectList.classList.toggle('hidden');
    })
}

const viewLocalProject = () => {
   
    projectTitle.textContent = activeProject.title;

   
    addSubtask.classList.remove('hidden');
    taskTable.innerHTML = '';

    if (activeProject.subTasks[0] == null) {
        return;
    }
    else
    {
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const taskHead = document.createElement('th');
    taskHead.textContent = 'Task';
    const descriptionHead = document.createElement('th');
    descriptionHead.textContent = 'Description';
    const dateHead = document.createElement('th');
    dateHead.textContent = 'Deadline';
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
    headRow.appendChild(extendDueDate);
    headRow.appendChild(completedHead);
    taskTable.appendChild(tableHead);


    activeProject.subTasks.forEach(subtask => {
        const tableRow = document.createElement('tr');
        const taskTitle = document.createElement('td')
        const taskDescription = document.createElement('td')
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
        completed.appendChild(checkbox);
        dueDate.appendChild(datePicker);
        const taskDueDate = subtask.dueDate;
        taskTitle.textContent = subtask.title;
        taskDescription.textContent = subtask.description;
        datePicker.value = format(parseISO(taskDueDate), "yyyy-MM-dd'T'HH:mm");
        priorityInput.value = subtask.priority;
        checkbox.checked = subtask.completed;
        const extendButton = document.createElement('button');
        extendButton.textContent = '1 hour';
        tableRow.appendChild(taskTitle);
        tableRow.appendChild(taskDescription);
        tableRow.appendChild(dueDate);
        tableRow.appendChild(priority);
        tableRow.appendChild(extendButton);
        tableRow.appendChild(completed);
        taskTable.appendChild(tableRow);

        datePicker.addEventListener('change', () => {
            subtask.dueDate = datePicker.value;
            saveLocally();
            createListFromLocalStorage();
            viewLocalProject();   
        })
        priority.addEventListener('change', () => {
            
            subtask.priority = priorityInput.value;
            saveLocally();
            createListFromLocalStorage();
            viewLocalProject();
        } )
        checkbox.addEventListener('change', () => {
            subtask.completed = checkbox.checked;
            saveLocally();
            createListFromLocalStorage();
            viewLocalProject();
        })
        extendButton.addEventListener('click', () => {
            subtask.dueDate = format(addHours(parseISO(subtask.dueDate), 1), 'yyyy-MM-dd\'T\'HH:mm');
            datePicker.value =subtask.dueDate;
            saveLocally();
            createListFromLocalStorage();
            viewLocalProject();
            
        })

        taskDescription.addEventListener('click', () => {
            const editDescription = document.createElement('textarea');
            taskDescription.textContent = "";
            editDescription.value = subtask.description;
            taskDescription.appendChild(editDescription)
            editDescription.focus();

            editDescription.addEventListener('change', () => {
                subtask.description = editDescription.value;
                saveLocally();
                createListFromLocalStorage();
                viewLocalProject();
            })
        })

        taskTitle.addEventListener('click', () => {
            const editTitle = document.createElement('input');
            taskTitle.textContent = "";
            editTitle.value = subtask.title;
            taskTitle.appendChild(editTitle)
            editTitle.focus();

            editTitle.addEventListener('change', () => {
                subtask.title = editTitle.value;
                saveLocally();
                createListFromLocalStorage();
                viewLocalProject();
            })
        })
        
        
    });  
    }
}

const addTask = () => {
    
    if (title.value.length < 4) {
        errorMessages.textContent = 'Title length must be longer than 3 characters';
        return false;
    }

    else if (isPast(parseISO(dueDate.value)))  {
        errorMessages.textContent = 'Deadline already expired';
        return false
    }

    else if (!isValid(parseISO(dueDate.value))) {
        errorMessages.textContent = 'Must select valid due date.';
        return false
    
    }

    else if (priority.value == null) {
        priority.value = "Low";
    }
    
    activeProject.subTasks.push(Todo(`${title.value}`, `${description.value}`, `${(dueDate.value)}`, `${priority.value}`, false)); 
    errorMessages.textContent = '';
    return true


}

const closeTaskModule = () => {
    taskModule.classList.add('hidden');
    title.value = '';
         description.value = '';
         dueDate.value = '';
         priority.value = ''; 
}

const buttonInit = () => {
    toggleProjectList();
    
    addProjectButton.addEventListener('click', () => {
        createListFromLocalStorage();
        newProject(oldArray);
    })
    
    addSubtask.addEventListener('click', () => {
            taskModule.classList.remove('hidden');
        })
  
    addTaskToProject.addEventListener('click', () => {
        if (addTask() == false) {
            return
        }

        
        saveLocally();
        createListFromLocalStorage();
        viewLocalProject();
        closeTaskModule();
        })

     cancelAddTask.addEventListener('click', closeTaskModule);   
    
     todayTab.addEventListener('click', () => {
        findTasksDueToday(oldArray);
        activeProject = null;
        createListFromLocalStorage();
        projectList.classList.add('hidden');
        expandButton.textContent = 'expand_less';
     });
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

const findTasksDueToday = (array) => {
    projectTitle.textContent = `Today's Tasks`;
    const todaysTasks = [];
    array.forEach(item => {
        item.subTasks.forEach(subtask => {
            if (isToday((parseISO(subtask.dueDate)))) {
                todaysTasks.push([item, subtask]);
            }
        })
    });
    
    
    taskTable.innerHTML = '';
    addSubtask.classList.add('hidden');

    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const projectHead = document.createElement('th');
    projectHead.textContent = 'Project';
    const taskHead = document.createElement('th');
    taskHead.textContent = 'Task';
    const descriptionHead = document.createElement('th');
    descriptionHead.textContent = 'Description';
    const dateHead = document.createElement('th');
    dateHead.textContent = 'Deadline';
    const priorityHead = document.createElement('th');
    priorityHead.textContent = 'Priority';
    const completedHead = document.createElement('th');
    completedHead.textContent = 'Completed?';
    const extendDueDate = document.createElement('th');
    extendDueDate.textContent = 'Extend Deadline?';

    tableHead.appendChild(headRow);
    tableHead.appendChild(taskHead);
    headRow.appendChild(projectHead);
    headRow.appendChild(taskHead);
    headRow.appendChild(descriptionHead);
    headRow.appendChild(dateHead);
    headRow.appendChild(priorityHead);
    headRow.appendChild(extendDueDate);
    headRow.appendChild(completedHead);
    taskTable.appendChild(tableHead);


todaysTasks.forEach(project => {
        const tableRow = document.createElement('tr');
        const projectTitle = document.createElement('td');
        projectTitle.classList.add('pointer');
        const subtaskTitle = document.createElement('td');
        const description = document.createElement('td');
        const dueDate = document.createElement('td');
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
        completed.appendChild(checkbox);
        dueDate.appendChild(datePicker);
        const taskDueDate = project[1].dueDate;
        
        projectTitle.textContent = project[0].title;
        subtaskTitle.textContent = project[1].title;
        description.textContent = project[1].description;
        datePicker.value = format(parseISO(taskDueDate), "yyyy-MM-dd'T'HH:mm");
        priorityInput.value = project[1].priority;
        checkbox.checked = project[1].completed;
        const extendButton = document.createElement('button');
        extendButton.textContent = '1 hour';
        tableRow.appendChild(projectTitle);
        tableRow.appendChild(subtaskTitle);
        tableRow.appendChild(description);
        tableRow.appendChild(dueDate);
        tableRow.appendChild(priority);
        tableRow.appendChild(extendButton);
        tableRow.appendChild(completed);
        taskTable.appendChild(tableRow);

        projectTitle.addEventListener('click', () => {
            activeProject = project[0];
            createListFromLocalStorage();
            viewLocalProject();
            projectList.classList.remove('hidden');
            expandButton.textContent = 'expand_more';
        })

        // datePicker.addEventListener('change', () => {
        //     subtask.dueDate = datePicker.value;
        //     saveLocally();
        //     createListFromLocalStorage();
        //     viewLocalProject();   
        // })
        // priority.addEventListener('change', () => {
            
        //     subtask.priority = priorityInput.value;
        //     saveLocally();
        //     createListFromLocalStorage();
        //     viewLocalProject();
        // } )
        // checkbox.addEventListener('change', () => {
        //     subtask.completed = checkbox.checked;
        //     saveLocally();
        //     createListFromLocalStorage();
        //     viewLocalProject();
        // })
        // extendButton.addEventListener('click', () => {
        //     subtask.dueDate = format(addHours(parseISO(subtask.dueDate), 1), 'yyyy-MM-dd\'T\'HH:mm');
        //     datePicker.value =subtask.dueDate;
        //     saveLocally();
        //     createListFromLocalStorage();
        //     viewLocalProject();
            
        // })
    }); 
    
}

createDefault()
createListFromLocalStorage();
viewLocalProject();


