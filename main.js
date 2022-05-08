
function addButtonPressed(){
    let newTask = document.querySelector('.task-action > div > input').value
    if(newTask == ''){
        document.querySelector('.task-action > div > input').style.border = '1px #FA0534 solid';
        document.querySelector('.task-action > div > input').placeholder = 'Te rog introdu text';
    }else{
        document.querySelector('.task-action > div > input').style.border = '0';
        document.querySelector('.task-action > div > input').placeholder = 'Descrie sarcina';
        sarcini.add(newTask)
        console.log(sarcini)
    }
    
}

let sarcini = new Set()

let addButton = document.querySelector('.task-action > div > button');
addButton.addEventListener('click', addButtonPressed);
console.log(addButton);