
let incomeNotes = [
    "Butikkjobb",
    "Fiolinspill",
    "Finn salg"
]
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
        <div id="page-container">
            <div id="budget-element">
                <h3>Legg til utgift</h3>
                
                ${addBudget()}
            </div>

            <div id="budget-element">
                <h3>Legg til utgift</h3>
                ${budgetList()}
            </div>
        </div>
    `
         
}


function addBudget(){
    let html = `
        <p>Tittel:</p>
        <input placeholder="Utgift">
        <p>Sum:</p>
        <input placeholder="0 kr">
    ` 
    return html
}

function budgetList(){

}
// function updateView(){
//     document.getElementById('app').innerHTML = /*HTML*/ `
//         <div id="header-container">
//             <h1><b>Budsjettplanlegger</b></h1>
//             <h3>Måned/År: ___________</h3>
//         </div>

//         <h2>Lønn</h2>
//         <div id="income-container">
//             <table>
//                 <tr>
//                     <th class="note-card">Dato</th>
//                     <th class="note-card">Beskrivelse</th>
//                     <th class="note-card">Antall kr.</th>
//                 </tr>
//                 ${getIncome()}
                
//             </table>
//         </div>
//     ` 
// }


// function getIncome(){
//     html = "";
//     for (let i = 0; i < numberofNotes; i++){
//         html += /*HTML*/ `
//         <tr>
//             <td class="note-card">${setDate()}</td>
//             <td class="note-card">${incomeNotes[i]}</td>
//             <td class="note-card">0 kr.</td>
//         </tr>
//         ` 
//     }
//         html += /*HTML*/ `
//         <tr>
//             <td>Total sum:</td>
//             <td></td>
//             <td>${incomeTotal}</td>
//         </tr>
//         `
//     return html
// }

// function setDate(){
//     let timeStamp = new Date()
//     return timeStamp.toLocaleDateString()
// }