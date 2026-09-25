const model = {
    app: {
        page: "income"
    },
    data: {
        income: [],
        expenses: []
    }
}

const incomesList = model.data.income;
const expensesList = model.data.expenses;
//Ikke reassign verdien til det koblingen peker på, det ødelegger koblingen.
//Du KAN endre innholder men .push etc.

let itemTitle = ""
let description = ""
let amount = ""

function loadList() {
    const income = localStorage.getItem("income"); //henter som string og legger til i variabel
    const expenses = localStorage.getItem("expenses");
    if (income) incomesList.push(...JSON.parse(income)); 
    //^ sjekker om variablen eksisterer/har inhold. Hvis ja, så setter den en ny value til 
    //model.data.income, som er stringen konvertert tilbake til array/objekter
    if (expenses) expensesList.push(...JSON.parse(expenses));
    //Kopierer innholdet til model.data.income til variabelen incomesList
    //expensesList.push(...model.data.expenses);
    console.log(model.data.income)
}