import{DisplayProjects} from './updateProjectList'
import { DisplayListItem } from "./AddTodoItem";
let todayListItems=[];
let todayDropdownValues=[];
let todayCalenderValues=[]
let todayDescriptions=[];

let scheduelListItems=[];
let scheduleDropdownValues=[];
let scheduleCalenderValues=[]
let scheduleDescriptions=[];

let myProjects = [];
function LoadPage(){
    //todayListItems = localStorage.getItem('today-list-item');
    todayListItems= JSON.parse(localStorage.getItem('TodayListItemNames'));
    todayDropdownValues= JSON.parse(localStorage.getItem('TodayDropdownValues'))
    todayCalenderValues= JSON.parse(localStorage.getItem('TodayCalenderValues'));
    todayDescriptions= JSON.parse(localStorage.getItem('TodayDescriptions'));

    scheduelListItems= JSON.parse(localStorage.getItem('scheduelListItemNames'));
    scheduleDropdownValues= JSON.parse(localStorage.getItem('scheduleDropdownValues'));
    scheduleCalenderValues= JSON.parse(localStorage.getItem('scheduleCalenderValues'));
    scheduleDescriptions= JSON.parse(localStorage.getItem('scheduleDescriptions'));


    myProjects = JSON.parse(localStorage.getItem('projects'));
    console.log(JSON.parse(localStorage.getItem('projects')));
    console.log(myProjects);
    DisplayProjects();
    DisplayListItem('todo-list');
}
function SaveSiteData(){
    localStorage.setItem('TodayListItemNames', JSON.stringify(todayListItems));
    localStorage.setItem('TodayCalenderValues', JSON.stringify(todayCalenderValues));
    localStorage.setItem('TodayDropdownValues', JSON.stringify(todayDropdownValues));
    localStorage.setItem('TodayDescriptions', JSON.stringify(todayDescriptions));

    localStorage.setItem('scheduelListItemNames',JSON.stringify(scheduelListItems));
    localStorage.setItem('scheduleCalenderValues',JSON.stringify(scheduleCalenderValues));
    localStorage.setItem('scheduleDescriptions',JSON.stringify(scheduleDescriptions));
    localStorage.setItem('scheduleDropdownValues',JSON.stringify(scheduleDropdownValues));


    localStorage.setItem('projects', JSON.stringify(myProjects));
}
function StoreProjectListItems(project, listItem, date){
    myProjects.map((x)=>{
        if(x.projectName==project.projectName){
            x.listItemNames.push(listItem);
            x.calenderValues.push(date);
        }
    })
}
function GetDescription(descriptionArray, index){
    console.log(index);
    if(document.getElementById('description')){let element =document.getElementById('description'); element.id=element.name; element.remove();}
    let descriptionBox = document.createElement('textarea');
    descriptionBox.id='description';
    descriptionBox.value = descriptionArray[index];
    document.getElementById('details').appendChild(descriptionBox);
    console.log(descriptionArray);
}

export{todayListItems,
    scheduelListItems, 
    myProjects, 
    todayDescriptions, 
    todayDropdownValues, 
    todayCalenderValues,
    scheduleDropdownValues,
    scheduleCalenderValues,
    scheduleDescriptions,
    StoreProjectListItems, 
    GetDescription,
    SaveSiteData, 
    LoadPage}