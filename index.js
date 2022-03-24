//Selectors
const expenseBtn = document.querySelector(".expense-btn")
const nameInput=document.querySelector(".name")
const dateInput=document.querySelector(".date")
const amountInput = document.querySelector(".amount")
const table = document.querySelector(".expenses")
const wrongInput = document.querySelector(".wrong-input")

let isFirst=true
//Event Listeners
expenseBtn.addEventListener("click", addExpense)
table.addEventListener("click", deleteExpense)

//Functions
function addExpense(event) {
     event.preventDefault()
     if (nameInput.value != "" && dateInput.value != "" && amountInput.value != "") {
          if (isFirst) {
          const tr = document.createElement("tr")
          const th1 = document.createElement("th")
          th1.innerText = "Name"
          tr.appendChild(th1)
          const th2 = document.createElement("th")
          th2.innerText = "Date"
          tr.appendChild(th2)
          const th3 = document.createElement("th")
          th3.innerText = "Amount"
          tr.appendChild(th3)
          const th4 = document.createElement("th")
          th4.innerText = ""
          tr.appendChild(th4)
          table.appendChild(tr)
          isFirst=false
     }
     const tr = document.createElement("tr")
     const td1 = document.createElement("td")
     td1.innerText = nameInput.value
     tr.appendChild(td1)
     const td2 = document.createElement("td")
     td2.innerText = dateInput.value
     tr.appendChild(td2)
     const td3 = document.createElement("td")
     td3.innerText = amountInput.value
     td3.innerText += " Eur"
     tr.appendChild(td3)
     const td4 = document.createElement("td")
     const buttonx = document.createElement("button")
     buttonx.classList.add("delete-btn")
     buttonx.innerText = "X"
     td4.appendChild(buttonx)
     tr.appendChild(td4)
     table.appendChild(tr)
     nameInput.value = ""
     dateInput.value = ""
     amountInput.value = ""
     wrongInput.innerText=""
     }
     else {
          
          wrongInput.innerText = "Incorrect data input"
          console.log(wrongInput.value)
     }
}

function deleteExpense(event) {
     const itemForDeletion = event.target
     const td = itemForDeletion.parentElement
     const tr = td.parentElement
     if (itemForDeletion.classList[0] === "delete-btn") {
          tr.classList.add("spin")
          tr.addEventListener("transitionend", function () {
               tr.remove()
          })
          
     }
     
}