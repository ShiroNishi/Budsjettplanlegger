

updateView()
function updateView(){
    let currentPageView = "";
    switch (model.app.page) {
        case "income":
            currentPageView = incomeView();
            break;
        case "expenses":
            currentPageView = expensesView();
            break;
    }
    document.getElementById('app').innerHTML = /*HTML*/ `
        <header id="header-container">
            <h1><b>Budsjettplanlegger</b></h1>
            <h3>Måned/År: ___________</h3>
        </header>

        <div id="page-container">
            <div class="page-buttons">
                <button class="add" style="margin-right: 100px"
                onclick="setPage('income')">Inntekter</button>
                <button class="add" style="margin-right: 100px"
                onclick="setPage('expenses')">Utgifter</button>
                <button class="add" style="margin-right: 90px"
                onclick="setPage('overview')">Oversikt</button>
            </div>
            ${currentPageView}
            </div>
        </div>
    `
}


function incomeView(){
    let html = /*HTML*/ `
        <div id="budget-element">
            <h3>Ny inntekt</h3>
            ${addIncome()}
        </div>
        <div id="budget-element" style="min-width: 200px">
            <h3>Oversikt inntekter</h3>
            <table style="border-bottom: solid black; border-bottom-width: 1px">
                <tr>
                    <th>Utgift</th>
                    <th>Beskrivelse</th>
                    <th>Sum</th>
                    <th>Velg</th>
                </tr>
                ${incomeList()}
            </table>
        </div>
    `
    return html
}


function expensesView(){
    let html = /*HTML*/ `
        <div id="budget-element">
            <h3>Ny utgift</h3>      
            ${addExpense()}
        </div>

        <div id="budget-element" style="min-width: 200px">
            <h3>Oversikt Utgifter</h3>
            <table style="border-bottom: solid black; border-bottom-width: 1px">
                <tr>
                    <th>Utgift</th>
                    <th>Beskrivelse</th>
                    <th>Sum</th>
                    <th>Velg</th>
                </tr>
                ${expenseList()}
            </table>
        </div>
    `
    return html
}




// FUNKSJONER
function addIncome(){
    let html = /*HTML*/ `
        <p>Tittel:</p>
        <input placeholder="Inntekt" onchange="itemTitle = this.value">
        
        <p>Beskrivelse:</p>
        <textarea placeholder="Kort beskrivelse"
        maxlength="30"
        onchange="description = this.value"
        ></textarea>

        <p>Sum:</p>
        <input placeholder="0 kr" onchange="amount = this.value">
        <br>
        <button class="add" onclick="setAmount(itemTitle, description, amount)">Legg til utgift</button>
    ` 
    return html
}

function incomeList(){
    let html = ""
    for (i = 0; i < incomesList.length; i++){
        html += /*HTML*/ `
            <tr class="listItem">
                <td>${incomesList[i].title}</td>
                <td>${incomesList[i].description}</td>
                <td>${incomesList[i].amount} kr</td>
                <td><button class="delete" onclick="deleteItem(${i})">Slett</button></td>
            </tr>
        `
    }
    return html
}

function addExpense(){
    let html = /*HTML*/ `
        <p>Tittel:</p>
        <input placeholder="Utgift" onchange="itemTitle = this.value">
        <p>Beskrivelse:</p>
        <textarea placeholder="Kort beskrivelse"
        maxlength="30"
        onchange="description = this.value"
        ></textarea>
        <p>Sum:</p>
        <input placeholder="0 kr" onchange="amount = this.value">
        <br>
        <button class="add" onclick="setAmount(itemTitle, description, amount)">Legg til utgift</button>
    ` 
    return html
}

function expenseList(){
    let html = ""
    for (i = 0; i < expensesList.length; i++){
        html += /*HTML*/ `
            <tr class="listItem">
                <td>${expensesList[i].title}</td>
                <td>${expensesList[i].description}</td>
                <td>${expensesList[i].amount} kr</td>
                <td><button class="delete" onclick="deleteItem(${i})">Slett</button></td>
            </tr>
        `
    }
    return html
}


