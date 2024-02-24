import { myProjects } from "./newproject";
const todayListItems=[];
const scheduelListItems=[];

function StoreProjectListItems(project, listItem){
    myProjects.map((x)=>{
        if(x.name==project.name)x.list.push(listItem);
    })
}
export{todayListItems, scheduelListItems, StoreProjectListItems}