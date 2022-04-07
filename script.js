let money = Number(prompt("Ваш месячный доход:"));
let income = 5000; // freelance
let addExpenses = String(prompt("Перечислите возможные расходы за рассчитываемый период через запятую"));
let deposit = Boolean(confirm("У вас есть депозит в банке?"));

let expenses1 = String(prompt("Введите обязательную статью расходов"));
let amount1 = Number(prompt("Во сколько обойдется?"));
let expenses2 = String(prompt("Введите обязательную статью расходов 2"));
let amount2 = Number(prompt("Во сколько обойдется?"));

let budgetMonth = money-(amount1 + amount2);
console.log('budgetMonth :', budgetMonth);

let mission = 10000;
let period = 0;

function showTypeOf(CheckObj){
    return(typeof(CheckObj));
}

//period = Math.ceil(mission/budgetMonth);
//console.log('period :', period);

//budgetDay = Math.round(budgetMonth / 30);
//console.log('Ежедневный доход ', budgetDay);

/*
if (budgetDay >= 1200){
    alert("У вас высокий уровень дохода");
}else if (budgetDay < 1200 && budgetDay >= 600){
    alert("У вас средний уровень дохода");
}else if (budgetDay < 600 && budgetDay >= 0){
    alert("К сожалению у вас уровень дохода ниже среднего");
}else{
    alert("Что-то пошло не так");
}*/
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
function getExpensesMonth(){
    return (amount1+amount2);
}
console.log(getExpensesMonth());
let totalExpanses = addExpenses.split(",");
totalExpanses.push(expenses1,expenses2);
console.log('addExpanses Array:', totalExpanses);

function getAccumulatedMonth(){
    return (money - getExpensesMonth());
}
let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth(){
    return(Math.ceil(mission/(getExpensesMonth()-accumulatedMonth)));
}
console.log('getTargetMonth :', getTargetMonth());
console.log('budgetDay:', Math.round(accumulatedMonth/30));