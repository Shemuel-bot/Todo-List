import { todayListItems, scheduelListItems, StoreProjectListItems } from "./StoreScheduleListValues";
function DisplayListItem(id){
    if(id=='todo-list'){
        todayListItems.map((x)=>document.getElementById(`${id}`).appendChild(x))
    }else if(id=='future-todo-list'){scheduelListItems.map((x)=>document.getElementById(`${id}`).appendChild(x))}
}
function CreateListItem(todoName, id){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const para = document.createElement('p');
    const trash = document.createElement('button');

    trash.addEventListener('click', ()=>{listItem.remove(); RemoveListItem(todoName, id)});
    checkBox.type='checkbox';
    para.textContent=todoName;
    listItem.id=todoName;

    listItem.appendChild(checkBox);
    listItem.appendChild(para);
    trash.textContent='trash';
    listItem.appendChild(trash);
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