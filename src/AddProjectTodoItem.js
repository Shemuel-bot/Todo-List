import { StoreProjectListItems, myProjects, GetDescription, todayDescriptions, SaveSiteData} from "./StoreScheduleListValues";
function DisplayTodoForm(id, project){
    const form = document.createElement('form');
    const todoName = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDateInput=document.createElement('input');
    const submitButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    submitButton.textContent='Add';
    submitButton.addEventListener('click', ()=>{form.remove();CreateListItem(todoName.value, project, dueDateInput.value, false);
        description.id=todoName.value;
        description.name=todoName.value;
        myProjects[myProjects.indexOf(project)].descriptions.push(description.value);
        SaveSiteData();
    });
    cancelButton.textContent='Cancel';
    cancelButton.addEventListener('click', ()=> form.remove());
    todoName.placeholder='name';
    dueDateInput.type='date';

    [todoName, description, dueDateInput, submitButton, cancelButton].map((x)=>form.appendChild(x))
    document.getElementById(id).prepend(form);
}
function DisplayTodoList(divId, ulId, project){
    const listContainer = document.createElement('ul');
    listContainer.id=ulId;
    document.getElementById(divId).appendChild(listContainer);
    DisplayListItem(ulId, project);
}
function DisplayListItem(id, project){
    console.log(myProjects)
    myProjects[myProjects.indexOf(project)].listItemNames.map((x)=>{
        CreateListItem(x, project, myProjects[myProjects.indexOf(project)].calenderValues[myProjects[myProjects.indexOf(project)].listItemNames.indexOf(x)], true)
    });
}
function RemoveListItem(project, todoName){
    myProjects[myProjects.indexOf(project)].listItemNames.splice(myProjects[myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);
    myProjects[myProjects.indexOf(project)].calenderValues.splice(myProjects[myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);
    myProjects[myProjects.indexOf(project)].descriptions.splice(myProjects[myProjects.indexOf(project)].listItemNames.indexOf(todoName), 1);
    SaveSiteData();
}
function CreateListItem(todoName, project, date, loadPage){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const para = document.createElement('p');
    const dueDate = document.createElement('input');
    const prioritySelect = document.createElement('select');
    const descriptionButton = document.createElement('button');
    const trash = document.createElement('button');

    prioritySelect.name='Priorty';
    for (let index = 1; index < 4; index++) {
        const option=document.createElement('option');
        option.value=index;
        option.textContent=`Priority ${index}`;
        prioritySelect.appendChild(option);
    }
    descriptionButton.textContent='Description'
    descriptionButton.addEventListener('click',()=>GetDescription(myProjects[myProjects.indexOf(project)].descriptions, myProjects[myProjects.indexOf(project)].listItemNames.indexOf(todoName)));
    trash.textContent='trash';
    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(project, todoName)});
    dueDate.type='date'
    dueDate.value=date;
    checkBox.type='checkbox';
    para.textContent=todoName;
    listItem.id=todoName;
    
    [checkBox, para, dueDate, prioritySelect, descriptionButton, trash].map((x)=>listItem.appendChild(x));
    document.getElementById('project-todo-list').appendChild(listItem);
    if(!loadPage){
    StoreProjectListItems(project, todoName, date);
    }
    SaveSiteData();
}

export{DisplayTodoForm, DisplayTodoList, }