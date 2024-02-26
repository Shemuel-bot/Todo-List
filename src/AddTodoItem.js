
import { todayListItems, scheduelListItems, GetDescription, Descriptions} from "./StoreScheduleListValues";
function DisplayListItem(id){
    if(id=='todo-list'){
        todayListItems.map((x)=>document.getElementById(`${id}`).appendChild(x))
    }else if(id=='future-todo-list'){scheduelListItems.map((x)=>document.getElementById(`${id}`).appendChild(x))}
}
function CreateListItem(todoName, id, dropdown, calender){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const para = document.createElement('p');
    const prioritySelect = document.createElement('select');
    const descriptionButton=document.createElement('button');
    const date = calender;
    const trash = document.createElement('button');

    descriptionButton.addEventListener('click',()=>GetDescription(todoName));
    prioritySelect.name='Priorty';
    prioritySelect.value=dropdown.value;
    for (let index = 1; index < 4; index++) {
        const option=document.createElement('option');
        option.value=index;
        option.textContent=`Priority ${index}`;
        prioritySelect.appendChild(option);
    }
    descriptionButton.textContent='Description';
    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(todoName, id)});
    trash.textContent='trash';
    checkBox.type='checkbox';
    para.textContent=todoName;
    listItem.id=todoName;

    [checkBox, para, prioritySelect, date, descriptionButton, trash].map((x)=>listItem.appendChild(x));
    document.getElementById(`${id}`).appendChild(listItem);
    id=='todo-list'?todayListItems.push(listItem):scheduelListItems.push(listItem);
}
function RemoveListItem(todoName,listId){
    if(listId=='todo-list'){
        todayListItems.map((x)=> {
            if(x.id==todoName)todayListItems.splice(todayListItems.indexOf(x), 1);
        })
    }else{
        scheduelListItems.map((x)=>{
            if(x.id==todoName)scheduelListItems.splice(scheduelListItems.indexOf(x), 1);
        });
    }
}
export{DisplayListItem, CreateListItem}