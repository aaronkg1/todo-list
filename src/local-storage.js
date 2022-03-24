const projectArray = [];
let activeProject;
let tasksToday;
let tasksThisWeek;


const checkForLocalStorage = (() => {
    if (localStorage.getItem('array') == null) {
        localStorage.setItem('array', '[]'); 
        }

})();

let oldArray = JSON.parse(localStorage.getItem('array'));

    const saveLocally = () => {
    
    localStorage.setItem('array', JSON.stringify(oldArray));
    oldArray = JSON.parse(localStorage.getItem('array'));
}

    

export {projectArray, activeProject, oldArray, saveLocally, tasksToday, tasksThisWeek}


