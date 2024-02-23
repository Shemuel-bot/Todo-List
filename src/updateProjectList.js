import { DisplayTodoForm } from "./SwitchScheduleView";
import { DisplayTodoList } from "./SwitchScheduleView";
function Update(project){
    const listItem = document.createElement('li');
    const newProject = document.createElement('button');
    newProject.addEventListener('click', ()=>MakeProjectDiv(project));
    newProject.textContent=project.name;
    listItem.appendChild(newProject);
    document.getElementById('list-of-projects').appendChild(listItem);
}

function RemoveProject(){
    if(document.getElementById('Project-div'))document.getElementById('Project-div').remove();
    
}

function MakeProjectDiv(project){
    RemoveProject();
    const projectDiv = document.createElement('div');
    const header = document.createElement('h2');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svgPath=document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const newTodo=document.createElement('button');

    newTodo.textContent='';
    newTodo.addEventListener('click', ()=> DisplayTodoForm('project-todo-list'));
    svg.setAttribute('xmnls', "http://www.w3.org/2000/svg");
    svg.setAttribute('viewBox', "0 0 24 24");
    svgPath.setAttributeNS(null,'d', "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
    svg.append(svgPath);
    newTodo.appendChild(svg);
    projectDiv.id='Project-div';
    header.textContent=project.name;

    document.getElementById('main-content').appendChild(projectDiv);
    DisplayTodoList('Project-div','project-todo-list');
    projectDiv.appendChild(newTodo);
    projectDiv.prepend(header);
}
export{Update}