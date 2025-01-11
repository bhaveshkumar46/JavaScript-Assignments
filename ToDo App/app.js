var input = document.querySelector("#input");
var ol = document.querySelector("#ol");
var arr = [];

function renderTodo() 
{
    ol.innerHTML = "";
    
    for (var i = 0; i < arr.length; i++) 
    {
        ol.innerHTML += `
        <li>
            ${arr[i]}
            <button onclick="deleteTodo(${i})">Delete</button>
            <button onclick="editTodo(${i})">Edit</button>
        </li>`;
    }
}

function addTodo()
 {
    if (input.value.trim() !== "") 
    { 
        arr.push(input.value);
        renderTodo();
        input.value = "";
    }
}

function deleteTodo(index) 
{
    console.log("todo deleted", index);
    arr.splice(index, 1);
    renderTodo();
}

function editTodo(index) 
{
    var newTodo = prompt("Edit your todo:", arr[index]); 
    if (newTodo !== null && newTodo.trim() !== "")
    { 
        arr[index] = newTodo; 
        renderTodo();
    }
}
