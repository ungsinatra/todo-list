const add  = document.querySelector('.todo__botton');
let input  = document.querySelector('.todo__input')
let listCase  = document.querySelector('.todo__lists');
let list  = document.createElement('li')



function setNewList(){
    let inputValue = input.value;
    let list = document.createElement('li');
    if(inputValue ===''){
        alert('Error')
    }else{
        list.className = 'todo__list'
        list.textContent = inputValue;
        listCase.appendChild(list);
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