
import {todayListItems, scheduelListItems, todayCalenderValues, todayDescriptions, todayDropdownValues, scheduleCalenderValues, scheduleDescriptions, scheduleDropdownValues, GetDescription, SaveSiteData} from "./StoreScheduleListValues";
function DisplayListItem(id){
    if(id=='todo-list'){
        todayListItems.map((x)=>{
            CreateListItem(x, 'todo-list', todayDropdownValues[todayListItems.indexOf(x)], todayCalenderValues[todayListItems.indexOf(x)], true)
        });
    }else if(id=='future-todo-list'){
        scheduelListItems.map((x)=>{
            CreateListItem(x, 'future-todo-list', scheduleDropdownValues[scheduelListItems.indexOf(x)], scheduleCalenderValues[scheduelListItems.indexOf(x)], true);
        })
    }
}
function CreateListItem(todoName, id, dropdown, calender, loadPage){
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const para = document.createElement('p');
    const prioritySelect = document.createElement('select');
    const descriptionButton=document.createElement('button');
    let date;
    const trash = document.createElement('button');

    id=='todo-list'?date = document.createElement('p'):date = document.createElement('input'); date.type='date';
    date.value=calender;
    descriptionButton.addEventListener('click',()=>id=='todo-list'?GetDescription(todayDescriptions, todayListItems.indexOf(todoName)):GetDescription(scheduleDescriptions, scheduelListItems.indexOf(todoName)));
    prioritySelect.name='Priorty';
    prioritySelect.value=dropdown;
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
    if(!loadPage){
        if(id=='todo-list'){
            todayListItems.push(todoName);
            todayCalenderValues.push(calender)
            todayDropdownValues.push(dropdown);
        }else{
            scheduelListItems.push(todoName);
            scheduleCalenderValues.push(calender);
            scheduleDropdownValues.push(dropdown);
        }
    }
    SaveSiteData()
}
function RemoveListItem(todoName,listId){
    if(listId=='todo-list'){
        todayListItems.map((x)=> {
            if(x==todoName){
                todayListItems.splice(todayListItems.indexOf(x), 1);
                todayCalenderValues.splice(todayListItems.indexOf(x), 1);
                todayDropdownValues.splice(todayListItems.indexOf(x), 1);
                todayDescriptions.splice(todayListItems.indexOf(x), 1);
                console.log(todayDescriptions);
            }
        })
    }else{
        scheduelListItems.map((x)=>{
            if(x==todoName){
                scheduelListItems.splice(scheduelListItems.indexOf(x), 1);
                scheduleCalenderValues.splice(scheduelListItems.indexOf(x), 1);
                scheduleDropdownValues.splice(scheduelListItems.indexOf(x), 1);
                scheduleDescriptions.splice(scheduelListItems.indexOf(x), 1);
            }
        });
    }
    SaveSiteData();
}
export{DisplayListItem, CreateListItem}