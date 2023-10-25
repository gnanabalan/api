const form=document.querySelector('#form');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInput()
})
function validateInput(){
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const cpasswordval=cpassword.value.trim();

    if(emailval===''){
        setError(email,'Email is required')
    }else if(!valuedatemail(emailval)){
    setError(emailval,'Email is required')
    }else{
       setSuccess(email)
    }
    if(passwordval===""){
       setError(password,"Password is required")
    }else if(passwordval.length<6){
        setError(password,'password must be atleast 6 character long')
    }else{
        setSuccess(password)
    }
    if(cpasswordval===""){
        setError(cpassword,'Comfirm password is required')
    }else if (cpasswordval !== passwordval){
        setError(cpassword,'password does not match')
    }else{
        setSuccess(cpassword)
    }
}

function setError(element,message){
    const inputgroup= element.parentElement
    const errorElement= inputgroup.querySelector('.error')

    errorElement.innerText=message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
}
function setSuccess(element){
    const inputgroup= element.parentElement;
    const errorElement= inputgroup.querySelector('.error')

    errorElement.innerText='';
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
}
const valuedatemail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

//todo list
const button = document.getElementById('sbutton');
const todoList = document.querySelector('.todolist'); // Use querySelector to select the class



let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(email.value)
    todos.push(password.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(email.value)
    addtodo(password.value)
    email.value='';
    password.value='';
    cpassword.value='';
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}
