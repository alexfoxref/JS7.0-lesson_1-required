'use strict'

const money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

let answerExpenses,
    answerTotal;

answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
answerTotal = +prompt("Во сколько обойдется?", "");
appData.expenses[answerExpenses] = answerTotal;

answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", "");
answerTotal = +prompt("Во сколько обойдется?", "");
appData.expenses[answerExpenses] = answerTotal;

const budgetPerDay = money/30;
// Только мне кажется, что бюджет это доходы минус расходы,
// а тут просто зарплата делить на кол-во дней
console.log(budgetPerDay);