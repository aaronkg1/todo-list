const projectArray = [];

let activeProject;

const checkForLocalStorage = () => {
    if (localStorage.getItem('array') == null) {
        localStorage.setItem('array', '[]'); 
        }

}

    let oldArray = JSON.parse(localStorage.getItem('array'));

    const saveLocally = (data) => {
    
    oldArray.push(data)
    
    localStorage.setItem('array', JSON.stringify(oldArray));
}

    

export {projectArray, activeProject, checkForLocalStorage, oldArray, saveLocally}


