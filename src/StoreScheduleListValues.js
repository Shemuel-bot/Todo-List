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
    if(document.getElementById('description')){const element =document.getElementById('description'); element.id=element.name; element.remove();}
    Descriptions.map((x)=>{
        if(x.id == descriptionName){
            document.getElementById('details').appendChild(x);
            x.id='description';
        }
    })
}

export{todayListItems, scheduelListItems, StoreProjectListItems, myProjects, Descriptions, GetDescription}