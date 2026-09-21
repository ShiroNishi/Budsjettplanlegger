let numberofNotes = 3;
let description = "";
let incomeTotal = "";

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
        <div id="header-container">
            <h1><b>Budsjettplanlegger</b></h1>
            <h3>Måned/År: ___________</h3>
        </div>

        <h2>Lønn</h2>
        <div id="income-container">
            <table>
                <tr>
                    <th class="note-card">Dato</th>
                    <th class="note-card">Beskrivelse</th>
                    <th class="note-card">Mengde</th>
                </tr>
                        ${getIncome()}
                
            <table>
        </div>
    ` 
}


function getIncome(){
    html = "";
    for (let i = 0; i < numberofNotes; i++){
        html += /*HTML*/ `
        <tr>
            <td class="note-card">${setDate()}</td>
            <td class="note-card">${description}</td>
            <td class="note-card">2 stk</td>
        </tr>
        ` 
    }
        html += /*HTML*/ `
        <tr>
            <td>Total sum:</td>
            <td></td>
            <td>${incomeTotal}</td>
        </tr>
        `
    return html
}

function setDate(){
    let timeStamp = new Date()
    return timeStamp.toLocaleDateString()
}