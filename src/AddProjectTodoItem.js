import { StoreProjectListItems, myProjects } from "./StoreScheduleListValues";
function DisplayTodoForm(id, project){
    const form = document.createElement('form');
    const todoName = document.createElement('input');
    const description = document.createElement('textarea');
    const dueDateInput=document.createElement('input');
    const submitButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    submitButton.textContent='Add';
    submitButton.addEventListener('click', ()=>{form.remove();CreateListItem(todoName.value, project, dueDateInput);});
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
    myProjects.map((x)=>{
        if(project.name==x.name){
            x.ListItems.map((a)=>{
                document.getElementById(id).appendChild(a);
            })
        }
    })
}
function RemoveListItem(project, todoName){
    myProjects.map((x)=>{
        if(x.name==project.name){
            x.ListItems.map((a)=>{
                if(a.id==todoName)x.ListItems.splice(x.ListItems.indexOf(a), 1)
            })
        }
    })
}
function CreateListItem(todoName, project, date){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const para = document.createElement('p');
    const dueDate = document.createElement('input');
    const prioritySelect = document.createElement('select');
    const trash = document.createElement('button');

    prioritySelect.name='Priorty';
    for (let index = 1; index < 4; index++) {
        const option=document.createElement('option');
        option.value=index;
        option.textContent=`Priority ${index}`;
        prioritySelect.appendChild(option);
    }
    trash.textContent='trash';
    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(project, todoName)});
    dueDate.type='date'
    dueDate.value=date.value;
    checkBox.type='checkbox';
    para.textContent=todoName;
    listItem.id=todoName;
    
    [checkBox, para, dueDate, prioritySelect, trash].map((x)=>listItem.appendChild(x));
    document.getElementById('project-todo-list').appendChild(listItem);
    StoreProjectListItems(project, listItem);
}
export{DisplayTodoForm, DisplayTodoList}