//style
const todoTitle = document.querySelector("h1");

todoTitle.style.color ='gray';

const oddList = document.querySelectorAll('li:nth-child(odd)');

oddList.forEach(li=>{
    li.style.color = 'blue';
});

const evenList = document.querySelectorAll('li:nth-child(even)');
evenList.forEach(li=>{
    li.style.color = 'green';
});

//event

const orderList = document.querySelector('#order_list');
const addList = document.querySelector('#todo_field');

const addTodo  = document.querySelector('.btn');
addTodo.addEventListener('click', function addNewTodo(){
    const newTodo = document.createElement('li');
    newTodo.textContent = addList.value;
    orderList.appendChild (newTodo);
})