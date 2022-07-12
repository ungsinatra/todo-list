const add = document.querySelector('.todo__botton');
let input = document.querySelector('.todo__input')
let todoList = document.querySelector('.todo__lists');
let list = document.createElement('li')
// localStorage.removeItem('tasks');//dell prop of localStorage
let tasks;
(!localStorage.tasks) ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks)

function Task(desc, status = false) {
    this.description = desc,
        this.isDone = status
}

const localStorageUPD = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
const htmlTamplates = (task, index) => {
    return `
    <div class="todo__list ${(task.isDone)?'todo__lists-active':'todo__lists'}">
    <p class="todo__list-title">${task.description}</p>
    <div class="todo__list-btns">
      <input type="checkbox" onchange = 'checkboxIsDone(${index})'class = 'todo__checkgox' ${task.isDone? 'checked':''}>
      <button class="todo__btn_wich_del" onclick = dellTask(${index}) >delete</button>
    </div>
    </div>
    `
}
let todoListElements ;


const addHTML = () => {
    todoList.innerHTML = '';
    if (sortTask()) {
        tasks.forEach((element, id) => {
            todoList.innerHTML += htmlTamplates(element, id)
            todoListElements  = document.querySelectorAll('.todo__list');
        });

    } else {
        console.log('')
    }

}
addHTML()

add.addEventListener('click', () => {
    if(input.value !=''){
        tasks.push(new Task(input.value));
        input.value = ''
    }
        
    localStorageUPD();
    addHTML();
})

//checkboxChecker
function checkboxIsDone(index){
    
    tasks[index].isDone = !tasks[index].isDone
    if(tasks[index].isDone){
        todoListElements[index].classList.add('todo__list-active')
    }else{
        todoListElements[index].classList.remove('todo__list-active')
    }  
    localStorageUPD()
    addHTML()
}

//dell

function dellTask(index){
    console.log(index)
    tasks.splice(index,1);
    localStorageUPD();
    addHTML()
}


//page down all task is ISDANE = true

function sortTask(){
    let taskIsDone;
    let taskIsnDone;
    taskIsDone = tasks.filter(el=>{
        return el.isDone
    })
    taskIsnDone = tasks.filter(el=>{
        return !el.isDone
    })
    return tasks = [...taskIsnDone,...taskIsDone];
}

//checkbox
/*
function checkboxChecker(task){
    if(!this.checked){
    task.isDone = true;
    todoList.classList.add('.todo__list-active')
    console.log('done')
    }
}

*/

/*
function setNewList(){
    let inputValue = input.value;
    let blockDo = document.createElement('div')
    let checkbox = document.createElement('input');
    console.log(checkbox)
    let lable = document.createElement('label');
    blockDo.className = 'todo__list'
    checkbox.id = `${inputValue}`
    checkbox.classList = 'todo__checkgox'
    lable.setAttribute('for',`${checkbox.id}`)
    checkbox.setAttribute('type','checkbox')
    if(inputValue ===''){
        alert('Error')
    }else{
        lable.textContent = inputValue
        blockDo.appendChild(checkbox)
        blockDo.appendChild(lable)
        lable.textContent = inputValue;
        listCase.appendChild(blockDo);
        input.value = ''    
    }
    return inputValue
    
}



function checkList(fc){
    let chach = new Set();
    return function(){
        let li = fc.call(this);
        if(!chach.has(li)){
            chach.add(li)
        }else{
            listCase.removeChild(listCase.lastChild)
            alert('такое значение уже есть')
        }
        
    }
    
}

add.onclick = checkList(setNewList)

*/





