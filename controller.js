
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

function deleteItem(list, index){
    if (list === 'income'){
        const currentArray = JSON.parse(localStorage.getItem("income"));
        if (index > -1 && index < currentArray.length) {
            incomesList.splice(index, 1);
            currentArray.splice(index, 1);
            localStorage.setItem("income", JSON.stringify(currentArray));
        } 
    } else if (list === "expenses"){
        const currentArray = JSON.parse(localStorage.getItem("expenses"));
        if (index > -1 && index < currentArray.length) {
            expensesList.splice(index, 1);
            currentArray.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(currentArray))
        }
    }
    
    updateView()
}


function getIncome(){
    return JSON.parse(localStorage.getItem("income"))
}

function getExpenses(){
    return JSON.parse(localStorage.getItem("expenses"))
}