const inputField = document.getElementById('inputField');
const add = document.getElementById('add');
const display = document.getElementById('display');
const stringArr = [];

function AddTask() {
    const stringValue = inputField.value;
    stringArr.push(stringValue);
    inputField.value = "";

    displayList();
}

function displayList() {
    display.innerHTML = "";

    stringArr.forEach((value,index) => {
        console.log('hiiiii');
        const ullist = document.createElement('li');
        ullist.innerHTML = value;

        const delBtn = document.createElement('button');
        button.innerHTML = 'delete';

        display.appendChild(ullist);
        display.appendChild(delBtn);
    });

}