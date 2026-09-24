
function setPage(page){
    model.app.page = page 
    updateView();

}

function setAmount(name, desc, nok){
    if (!name || !desc || !nok || isNaN(Number(nok))){
       alert("Du må fylle ut alle feltene og sum må være et heltall")
    } else {
        if (model.app.page === "income"){
            incomesList.push({title: name, description: desc, amount: Number(nok)})
            localStorage.setItem("income", JSON.stringify(incomesList))
        } else if (model.app.page === "expenses"){
            expensesList.push({title: name, description: desc, amount: Number(nok)})
            localStorage.setItem("expenses", JSON.stringify(expensesList))
        }
    itemTitle = "";
    description = "";
    amount = "";

    updateView()
    }
}

function deleteItem(index){
    expensesList.splice(index, 1);
    updateView()
}


function getIncome(){
    return JSON.parse(localStorage.getItem("income"))
}

function getExpenses(){
    return JSON.parse(localStorage.getItem("expenses"))
}