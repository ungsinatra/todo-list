const add  = document.querySelector('.todo__botton');
let input  = document.querySelector('.todo__input')
let listCase  = document.querySelector('.todo__lists');
let list  = document.createElement('li')



function setNewList(){
    let inputValue = input.value;
    let blockDo = document.createElement('div')
    let checkbox = document.createElement('input');
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