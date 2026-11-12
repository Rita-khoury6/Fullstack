const description=document.getElementById("descr");
const amount=document.getElementById("Amount");
const date=document.getElementById("date");
const method=document.getElementById("method");
const category=document.getElementById("category");
const notes=document.getElementById("note");
const add_btn=document.getElementById("add-btn");
const reset_btn=document.getElementById("reset-btn");
const totalspent=document.getElementById("totalSpent");
const categoryMess=document.getElementById("Categorymess");
const amountMess=document.getElementById("amountmess");
const dateMess=document.getElementById("datemess");
const descriptionMess=document.getElementById("descriptionmess");
const expensesCount=document.getElementById("expensesCount");
const biggestExpense=document.getElementById("biggestExpense");
const emptyState=document.getElementById("emptyState");
const expenseTableBody=document.getElementById("expensesTableBody");
const form1=document.getElementById("expenseForm");
const categoryFilter = document.getElementById("categoryFilter");
const sortAmount = document.getElementById("sortAmount");
const savedExpenses = localStorage.getItem("expenses");
let expenses = [];
let editingIndex=null;
if (savedExpenses !== null) {
    expenses = JSON.parse(savedExpenses);
}
renderExpenses();
updateTotalSpent();
updateExpensesCount();
updateBiggestExpense();
updateEmptyState();
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}
function clearErrors() {
    categoryMess.textContent = "";
    amountMess.textContent = "";
    dateMess.textContent = "";
    descriptionMess.textContent = "";
} 
function validateForm() {
    let isValid = true;
    const descriptionValue = description.value.trim();
    const amountValue = Number(amount.value);
    const dateValue = date.value;
    const categoryValue = category.value;

    if (descriptionValue === "") {
        descriptionMess.textContent = "Description is required.";
        isValid = false;
    } else if (descriptionValue.length < 3) {
        descriptionMess.textContent = "Description must be at least 3 characters.";
        isValid = false;
    }

    if (amount.value.trim() === "") {
        amountMess.textContent = "Amount is required.";
        isValid = false;
    } else if (!Number.isFinite(amountValue) || amountValue <= 0) {
        amountMess.textContent = "Amount must be greater than 0.";
        isValid = false;
    }

    if (dateValue === "") {
        dateMess.textContent = "Date is required.";
        isValid = false;
    }

    if (categoryValue === "") {

        categoryMess.textContent = "Please select a category.";
        isValid = false;
    }

    return isValid;
}

function renderExpenses(expensesToRender = expenses){
    expenseTableBody.innerHTML = "";

   expensesToRender.forEach(function(expense, index) {

        const row = document.createElement("tr");

        const values = [
            expense.description,
            expense.amount,
            expense.category,
            expense.date
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

   const actionsCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
 deleteBtn.classList.add("btn", "btn-danger");
const   editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.classList.add("btn", "btn-success");

editBtn.addEventListener("click",function(){
editingIndex=index;
description.value=expense.description;
date.value = expense.date;
amount.value = expense.amount;
category.value = expense.category;
method.value = expense.method;
notes.value = expense.notes;
});

        deleteBtn.addEventListener("click", function() {
            expenses.splice(index, 1);
saveExpenses();
            updateTotalSpent();
            updateExpensesCount();
            updateBiggestExpense();
            updateEmptyState();

            renderExpenses();
        });

        
actionsCell.appendChild(deleteBtn);
actionsCell.appendChild(editBtn);
row.appendChild(actionsCell);
expenseTableBody.appendChild(row);
    });
}
form1.addEventListener("submit", function(event) {
    event.preventDefault();

    clearErrors();

    if (!validateForm()) {
        return;
    }

    const descriptionValue = description.value.trim();
    const amountValue = Number(amount.value);
    const dateValue = date.value;
    const methodValue = method.value;
    const categoryValue = category.value;
    const notesValue = notes.value.trim();
    const newExpense = {
        description: descriptionValue,
        amount: amountValue,
        date: dateValue,
        method: methodValue,
        category: categoryValue,
        notes: notesValue
    }
    if(editingIndex===null){
    expenses.push(newExpense);}
    else{
        expenses[editingIndex] = newExpense;
    }
    saveExpenses();
    updateTotalSpent();
    updateExpensesCount()
    updateBiggestExpense()
    updateEmptyState();
    renderExpenses();
    form1.reset();
    editingIndex=null;
   // console.log(expenses);
   
});
function updateTotalSpent() 
{
    const total=expenses.reduce((sum,expense)=>{
   return sum+expense.amount;},0);
 totalspent.textContent = total.toFixed(2);
}


function updateExpensesCount(){
    const expensescount1=expenses.length;
    expensesCount.textContent=expensescount1;
}
function updateBiggestExpense(){
    if(expenses.length==0){
        biggestExpense.textContent = "0.00";
        return;
    }
    const largestExp=expenses.reduce((max,expense)=>
    {
        return Math.max(max,expense.amount);
    },0);
    biggestExpense.textContent=largestExp.toFixed(2);
}
function updateEmptyState(){
    if(expenses.length>0){
        emptyState.style.display="none";
    }
    else{
         emptyState.style.display = "block";
    }
}
categoryFilter.addEventListener("change", function() {  const selectedCategory = categoryFilter.value;

    if (selectedCategory === "All") {
        renderExpenses();
    }
else{
    const filteredExpenses = expenses.filter(function(expense) {
        return expense.category === selectedCategory;
    });
    renderExpenses(filteredExpenses);}
});
sortAmount.addEventListener("change", function() {

    const sortValue = sortAmount.value;
const sortedExpenses=[...expenses]
 if (sortValue === "high-low") {
     sortedExpenses.sort(function(a, b) {
     return b.amount - a.amount;
     });
    } else if (sortValue === "low-high") {
    sortedExpenses.sort(function(a, b) {
               return a.amount - b.amount;
     });

    }
    renderExpenses(sortedExpenses);

});