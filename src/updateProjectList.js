import {DisplayTodoForm, DisplayTodoList} from "./AddProjectTodoItem";
import {SaveSiteData, myProjects} from './StoreScheduleListValues';
function Update(project){
    const listItem = document.createElement('li');
    const newProject = document.createElement('button');
    const deleteProject = document.createElement('button');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('xmnls', "http://www.w3.org/2000/svg");
    svg.setAttribute('viewBox', "0 0 40 24");
    svgPath.setAttributeNS(null,'d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svg.append(svgPath);

    deleteProject.classList.add('trash');
    deleteProject.appendChild(svg);
    deleteProject.addEventListener('click', ()=> {listItem.remove();RemoveProject(x)})
    newProject.addEventListener('click', ()=>MakeProjectDiv(project));
    newProject.textContent=project.projectName;
    listItem.appendChild(newProject);
    listItem.appendChild(deleteProject);
    document.getElementById('list-of-projects').appendChild(listItem);
    SaveSiteData();
    
}
function DisplayProjects(){
    myProjects.map((x)=>{const listItem = document.createElement('li');
    const newProject = document.createElement('button');
    const deleteProject = document.createElement('button');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('xmnls', "http://www.w3.org/2000/svg");
    svg.setAttribute('viewBox', "0 0 40 24");
    svgPath.setAttributeNS(null,'d', "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z");
    svg.append(svgPath);

    deleteProject.classList.add('trash');
    deleteProject.appendChild(svg);
    deleteProject.addEventListener('click', ()=> {listItem.remove();RemoveProject(x)})
    newProject.addEventListener('click', ()=>MakeProjectDiv(x));
    newProject.textContent=x.projectName;
    
    listItem.appendChild(newProject);
    listItem.appendChild(deleteProject);
    document.getElementById('list-of-projects').appendChild(listItem);})
    
}
function RemoveProject(projects){
    myProjects.splice(myProjects.indexOf(projects), 1);
    SaveSiteData();
}

function MakeProjectDiv(project){
    if(document.getElementById('Project-div'))document.getElementById('Project-div').remove();
    const projectDiv = document.createElement('div');
    const header = document.createElement('h2');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const newTodo=document.createElement('button');

    newTodo.textContent='';
    newTodo.addEventListener('click', ()=> DisplayTodoForm('project-todo-list', project));
    svg.setAttribute('xmnls', "http://www.w3.org/2000/svg");
    svg.setAttribute('viewBox', "0 0 24 24");
    svgPath.setAttributeNS(null,'d', "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    svg.append(svgPath);
    newTodo.appendChild(svg);
    projectDiv.id='Project-div';
    header.textContent=project.projectName;

    document.getElementById('main-content').appendChild(projectDiv);
    DisplayTodoList('Project-div','project-todo-list', project);
    projectDiv.appendChild(newTodo);
    projectDiv.prepend(header);
}
export{Update, DisplayProjects}