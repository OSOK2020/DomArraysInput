// Todo-list
const textInput = document.querySelector("#textInput");
const textBtn = document.querySelector("#textBtn");
const todoList = document.querySelector("#todoList");



function xxx () {

let list = [];

console.log(list)
function renderTodos (todoArray) {
    todoList.innerHTML = "";


    todoArray.forEach((todo, index) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerText = `#${index} - ${todo}`

        //DeleteBtn
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ta bort";

        deleteBtn.addEventListener("click", () => {
            deleteTodo(index);
         });
         li.append(deleteBtn)

         todoList.append(li)
    })
}

function addTodo () {
    if(list.length < 5 && textInput.value !== "") {
        list.push(textInput.value)
        renderTodos(list);
    } else if (list.length < 5 && textInput.value === "") {
        alert("Ingen ny aktivitet registrerades");
        renderTodos(list);
    } else {
        alert("Max 5 todos");
    }
}

function deleteTodo (todoIndex) {
        list = list.filter((todo, index) => index !== todoIndex);
        renderTodos(list)
}

textBtn.addEventListener("click", () => {
        addTodo();
        textInput.value = ""
})
}

xxx();



// Simpel kalkylator
const nrOne  = document.querySelector("#nrOne");
const nrTwo = document.querySelector("#nrTwo");
const calculations = document.querySelector("#calculations")

const addBtn = document.querySelector("#addBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const substractBtn = document.querySelector("#substractBtn");

let listCalculations = []

function renderCalculations (numberArray) {
    calculations.innerHTML = "";

    numberArray.forEach((calculation, index) => {
        const li = document.createElement("li");
        li.classList.add("count");
        
        li.innerText = `#${index} - ${calculation}`
    
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Ta bort"

        deleteBtn.addEventListener("click", () => {
            deleteCalculation(index)
            console.log(listCalculations)
        })

        calculations.append(li, deleteBtn)
    });
}

function deleteCalculation (calculationIndex) {  
    listCalculations = listCalculations.filter((calculation, index) => index !== calculationIndex)
    renderCalculations(listCalculations);
}

function checkAndAddValues () {
        const nrOneValue = parseFloat(nrOne.value);
        const nrTwoValue = parseFloat(nrTwo.value);

        if (nrOneValue && nrTwoValue) {
            const sumAdd = nrOneValue + nrTwoValue;

            listCalculations.push(sumAdd)

            nrOne.value = ""
            nrTwo.value = ""

            renderCalculations(listCalculations)
        } else if (nrOneValue && isNaN(nrTwoValue)) {
            alert("Ange ett andra tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else if (isNaN(nrOneValue) && nrTwoValue) {
            alert("Ange ett första tal")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else {
            alert("Ange två tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        }
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkAndAddValues();
})

function checkAndMultiplyValues () {
        const nrOneValue = parseFloat(nrOne.value);
        const nrTwoValue = parseFloat(nrTwo.value);

        if (nrOneValue && nrTwoValue) {
            const sumMultiply = nrOneValue * nrTwoValue;

            listCalculations.push(sumMultiply)

            nrOne.value = ""
            nrTwo.value = ""
            
            renderCalculations(listCalculations)
        } else if (nrOneValue && isNaN(nrTwoValue)) {
            alert("Ange ett andra tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else if (isNaN(nrOneValue) && nrTwoValue) {
            alert("Ange ett första tal")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else {
            alert("Ange två tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        }
}

multiplyBtn.addEventListener("click", () => {
    checkAndMultiplyValues();
})

function checkAndSubstractValues () {
        const nrOneValue = parseFloat(nrOne.value);
        const nrTwoValue = parseFloat(nrTwo.value);

        if (nrOneValue && nrTwoValue) {
            const sumMultiply = nrOneValue - nrTwoValue;

            listCalculations.push(sumMultiply)

            nrOne.value = ""
            nrTwo.value = ""
            
            renderCalculations(listCalculations)
        } else if (nrOneValue && isNaN(nrTwoValue)) {
            alert("Ange ett andra tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else if (isNaN(nrOneValue) && nrTwoValue) {
            alert("Ange ett första tal")
            nrOne.value = ""
            nrTwo.value = ""
            return
        } else {
            alert("Ange två tal.")
            nrOne.value = ""
            nrTwo.value = ""
            return
        }
}

substractBtn.addEventListener("click", () => {
    checkAndSubstractValues();
})

//Tal mellan 0-10

