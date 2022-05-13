
function addButtonPressed(){

    let taskExists = false; //exists flag
    const newTask = document.querySelector('.task-action > div > input').value
    if(newTask == ''){
        document.querySelector('.task-action > div > input').style.border = '1px #FA0534 solid';
        document.querySelector('.task-action > div > input').placeholder = 'Please enter text';
    }else{
        document.querySelector('.task-action > div > input').style.border = '0';
        document.querySelector('.task-action > div > input').placeholder = 'Describe task';
        tasks.add(newTask);
        console.log(tasks);
    }
    const newLi = document.createElement('li');
    newLi.innerText = getLastValueFromSet(tasks);
    newLi.addEventListener('click', 
    () => {
        markDone(newLi);
    });
    const listItems =  document.querySelectorAll('.task-view > ul > li');
    listItems.forEach(
        element =>{
            if(element.innerHTML ==  newLi.innerHTML){ //search if task exists
                taskExists = true;
            }
        }
    )
    if(!taskExists){
        taskListUl.append(newLi);
    }
    console.log(listItems);
}

function clearButtonPressed(){
    tasks.clear();
    console.log(tasks);
    document.querySelector('.task-view > ul').replaceChildren()
    
}

function getLastValueFromSet(set){
    let value;
    for(value of set);
    return value;
}

function markDone(item){
    if(item.classList.contains('mark-done')){
        item.classList.remove('mark-done');
    }else{
        item.classList.add('mark-done');
    }
}

const tasks = new Set();

const addButton = document.querySelector('.task-action > div > button');
const clearButton = document.querySelector('.task-action > button');
const taskListUl = document.querySelector('.task-view > ul');


addButton.addEventListener('click', addButtonPressed);
clearButton.addEventListener('click', clearButtonPressed);
// taskListUlItems.addEventListener('click', markDone);

console.log(addButton);
console.log(taskListUl);

