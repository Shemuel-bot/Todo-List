import { Update } from "./updateProjectList";
const myProjects = [];

function ImplementNewProjectButton(){
const newProjectButton = document.getElementById('new-project-button');
newProjectButton.addEventListener('click', ()=>CreateNameProjectInput());
}

function MakeProject(name){
    const theProject = new Project(name);
    myProjects.push(theProject);
    Update(theProject);
}

class Project {
    constructor(name){
        this.name = name;
    }
}

function CreateNameProjectInput(){
    const container = document.createElement('div');
    const inputName = document.createElement('input');
    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    inputName.placeholder='project name';
    addButton.textContent='add';
    cancelButton.textContent='cancel';

    addButton.onclick=()=>{container.remove(); MakeProject(inputName.value);}
    cancelButton.onclick=()=>container.remove();

    container.appendChild(inputName);
    container.appendChild(addButton);
    container.appendChild(cancelButton);

    document.getElementById('list-of-projects').prepend(container);
}
export{ImplementNewProjectButton, myProjects}