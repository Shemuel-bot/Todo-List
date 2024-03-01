import { Update } from "./updateProjectList";
import { SaveSiteData } from "./StoreScheduleListValues";
import { myProjects } from "./StoreScheduleListValues";

function ImplementNewProjectButton(){
const newProjectButton = document.getElementById('new-project-button');
newProjectButton.addEventListener('click', ()=>CreateNameProjectInput());
}

function MakeProject(name){
    const theProject = new Project(name);
    myProjects.push(theProject);
    Update(theProject);
    SaveSiteData();
}

function Project (name){
        let projectName = name;
        let listItemNames=[];
        let calenderValues=[];
        let dropdownValues=[];
        let descriptions=[];
        return{projectName, listItemNames, calenderValues, dropdownValues, descriptions}
}
function CreateNameProjectInput(){
    const container = document.createElement('div');
    const inputName = document.createElement('input');
    const addButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    inputName.placeholder='project name';
    addButton.textContent='add';
    cancelButton.textContent='cancel';

    addButton.onclick=()=>{container.remove(); MakeProject(inputName.value); SaveSiteData();}
    cancelButton.onclick=()=>container.remove();

    container.appendChild(inputName);
    container.appendChild(addButton);
    container.appendChild(cancelButton);

    document.getElementById('list-of-projects').prepend(container);
}
export{ImplementNewProjectButton, myProjects}