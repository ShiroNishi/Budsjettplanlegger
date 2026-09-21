

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="header-container">
            <h1><b>Budsjettplanlegger</b></h1>
            <h3>Måned/År: ___________</h3>
        </div>
        <div id="page-container">
            <div id="budget-element">
                <h3>Legg til utgift</h3>
                
                ${addBudget()}
            </div>

            <div id="budget-element" style="min-width: 200px">
                <h3>Oversikt Utgifter</h3>
                <table style="border-bottom: solid black; border-bottom-width: 1px">
                    <tr>
                        <th style="padding-right: 40px">Utgift</th>
                        <th style="padding-right: 70px">Beskrivelse</th>
                        <th style="padding-left: 15px; padding-right: 40px;">Sum</th>
                        <th>Velg</th>
                        
                    </tr>
                    ${budgetList()}
                </table>
            </div>
        </div>
    `
         
}


function addBudget(){
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
        <button class="add" onclick="setExpense(itemTitle, description, amount)">Legg til utgift</button>
    ` 
    return html
}

function budgetList(){
    let html = ""
    for (i = 0; i < expensesList.length; i++){
        html += `
            <tr class="listItem">
                <td>${expensesList[i].title}</td>
                <td>${expensesList[i].description}</td>
                <td>${expensesList[i].amount} kr</td>
                <td><button>Slett</button></td>
            </tr>

        `
    }
    return html
}

function setExpense(name, desc, nok){
    if (!name || !desc || !nok || isNaN(Number(nok))){
       alert("Du må fylle ut alle feltene og sum må være et heltall")
    } else {
    expensesList.push({title: name, description: desc, amount: Number(nok)})
    itemTitle = "";
    description = "";
    amount = "";
    updateView()
    }
}
