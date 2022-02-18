// get all elements from index.html to make decisions with
let addToDoButton = document.getElementById('addToList');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputText');
let toDos = document.getElementsByClassName('to-dos');

// test to see if working correctly
console.log(addToDoButton, toDoContainer, inputField);

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
