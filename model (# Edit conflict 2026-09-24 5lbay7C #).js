
const model = {
    app: {
        page: "income"
    },
    data: {
        income: [],
        expenses: []
    }
}


let incomesList = model.data.income;
const expensesList = model.data.expenses;


let itemTitle = ""
let description = ""
let amount = ""

function loadList() {
    const income = localStorage.getItem("income");
    const expenses = localStorage.getItem("expenses")
    if (income) model.data.income = JSON.parse(income);
    if (expenses) model.data.expenses = JSON.parse(expenses);
    console.log(income)
}