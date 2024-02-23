import{DisplayScheduleDiv,DisplayTodoForm} from './SwitchScheduleView'
import{ImplementNewProjectButton, myProjects} from './newproject';
import './style.css';

ImplementNewProjectButton();

document.getElementById('today-button').addEventListener('click', ()=> DisplayScheduleDiv('today-task', 'Today'));
document.getElementById('upcoming-button').addEventListener('click', ()=> DisplayScheduleDiv('future-task','Schedule'));
document.getElementById('new-todo-button').addEventListener('click', ()=> DisplayTodoForm('todo-list'));
