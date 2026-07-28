let expenses = [];

const incomeInput = document.querySelector(".s2");
const expenseName = document.querySelector(".s4");
const expenseAmount = document.querySelector(".s5");

const addBtn = document.querySelector(".s6");
const enquiryBtn = document.querySelector("#s7");

const table = document.querySelector("#expenseTable");
const tableBody = document.querySelector("#tableBody");

const result = document.querySelector("#result");
const totalExpenseText = document.querySelector("#totalExpense");
const savingText = document.querySelector("#saving");
const savingPercentText = document.querySelector("#savingPercent");


addBtn.addEventListener("click", function () {

    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);

    if(name=="" || amount<=0){
        alert("Enter valid expense.");
        return;
    }

    expenses.push({
        name:name,
        amount:amount
    });

    expenseName.value="";
    expenseAmount.value="";

    alert("Expense Added Successfully");
});

enquiryBtn.addEventListener("click",function(){

    let income = Number(incomeInput.value);

    if(income<=0){
        alert("Enter Monthly Income");
        return;
    }

    tableBody.innerHTML="";

    let totalExpense=0;

    expenses.forEach(function(exp){

        totalExpense += exp.amount;

        tableBody.innerHTML += `
            <tr>
                <td>${exp.name}</td>
                <td>₹${exp.amount}</td>
            </tr>
        `;

    });

    let saving = income-totalExpense;

    let savingPercent = (saving/income)*100;

    table.style.display="table";
    result.style.display="block";

    totalExpenseText.innerHTML="Total Expense : ₹"+totalExpense;
    savingText.innerHTML="Saving : ₹"+saving;
    savingPercentText.innerHTML="Saving Percentage : "+savingPercent.toFixed(2)+"%";

});