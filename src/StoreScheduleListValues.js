import { myProjects } from "./newproject";
const todayListItems=[];
const scheduelListItems=[];
const Descriptions=[];

function StoreProjectListItems(project, listItem){
    myProjects.map((x)=>{
        if(x.name==project.name)x.ListItems.push(listItem);
    })
}
function GetDescription(descriptionName){
    Descriptions.map((x)=>{
        if(x.id == descriptionName){
            document.getElementById('description').value=x.value;
        }
    })
}

export{todayListItems, scheduelListItems, StoreProjectListItems, myProjects, Descriptions, GetDescription}