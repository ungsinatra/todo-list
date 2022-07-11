const add  = document.querySelector('.todo__botton');
let input  = document.querySelector('.todo__input')
let todoList  = document.querySelector('.todo__lists');
let list  = document.createElement('li')
// localStorage.removeItem('tasks');//dell prop of localStorage
let tasks;
(!localStorage.tasks)?tasks = []:tasks = JSON.parse(localStorage.getItem('tasks'));
console.log(tasks)

function Task(desc,status=false){
    this.description = desc,
    this.isDone = status
}

const localStorageUPD = ()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
const htmlTamplates = (task,index)=>{
    return `
    <div class="todo__list">
    <p class="todo__list-title">${task.description}</p>
    <div class="todo__list-btns">
      <input type="checkbox" class = 'todo__checkgox'>
      <button class="todo__btn_wich_del">delete</button>
    </div>
    </div>
    `
}

const addHTML = ()=>{
    todoList.innerHTML = '';
    if(tasks.length>0){
        tasks.forEach((element,id) => {
            todoList.innerHTML += htmlTamplates(element,id)
        });

    }else{
        console.log('')
    }

}
addHTML()

add.addEventListener('click',()=>{
    tasks.push(new Task(input.value));
    input.value = ''
    localStorageUPD();
    addHTML();
})

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





