// Todo-list
const textInput = document.querySelector("#textInput");
const textBtn = document.querySelector("#textBtn");
const todoList = document.querySelector("#todoList");

const list = [];
// Nedan kod fungerar inte eftersom den inte modifierar
// listan per item/todo som man tar bort

textBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    li.classList.add("myTodo")

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Ta bort"
    
    textInput.textContent = "";

    let textValue = textInput.value;

    if (textValue && list.length < 5) {
        li.append(textValue, deleteBtn)
        list.push(textValue)
        todoList.append(li)
        console.log(list)
    } else if (textValue === "" && list.length < 5){
        console.log(textValue)
        textValue = "Ingen aktivitet sparad"
        li.append(textValue, deleteBtn)
        list.push(textValue)
        todoList.append(li)
        console.log(list)
    } 

    
    deleteBtn.addEventListener("click", () => {
            li.remove();
            list.pop();
    })

})
