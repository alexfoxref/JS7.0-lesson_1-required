'use strict'

const money = +prompt("Ваш бюджет на месяц?", "50000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-18");

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

answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", "Кварплата");
answerTotal = +prompt("Во сколько обойдется?", "5000");
appData.expenses[answerExpenses] = answerTotal;

answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", "Кварплата");
answerTotal = +prompt("Во сколько обойдется?", "5000");
appData.expenses[answerExpenses] = answerTotal;

const budgetPerDay = money/30;
// Только мне кажется, что бюджет это доходы минус расходы,
// а тут просто зарплата делить на кол-во дней
console.log(budgetPerDay);