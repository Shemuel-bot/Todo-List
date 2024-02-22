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
    console.log('work');
    RemoveProject();
    const projectDiv = document.createElement('div');
    const header = document.createElement('h2');
    projectDiv.id='Project-div';
    header.textContent=project.name;
    projectDiv.appendChild(header);
    document.getElementById('main-content').appendChild(projectDiv);
}
export{Update}