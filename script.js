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

for (let i = 0; i < 2; i++) {
    let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
        answerTotal = prompt("Во сколько обойдется?", "");
    
    if ( (typeof(answerExpenses)) === 'string' && (typeof(answerExpenses)) != null && (typeof(answerTotal)) != null 
        && answerExpenses != '' && answerTotal != '' && answerExpenses.length < 50 ) {
        console.log('done');
        appData.expenses[answerExpenses] = +answerTotal;
    } else {
        i--;
    }
}

// let i = 0;

// // Цикл while
// while (i < 2) {
//     let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answerTotal = prompt("Во сколько обойдется?", "");
    
//     if ( (typeof(answerExpenses)) === 'string' && (typeof(answerExpenses)) != null && (typeof(answerTotal)) != null 
//         && answerExpenses != '' && answerTotal != '' && answerExpenses.length < 50 ) {
//         console.log('done');
//         appData.expenses[answerExpenses] = +answerTotal;
//     } else {
//         i--;
//     };

//     i++;
// };

// // Цикл do - while
// do {
//     let answerExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         answerTotal = prompt("Во сколько обойдется?", "");
    
//     if ( (typeof(answerExpenses)) === 'string' && (typeof(answerExpenses)) != null && (typeof(answerTotal)) != null 
//         && answerExpenses != '' && answerTotal != '' && answerExpenses.length < 50 ) {
//         console.log('done');
//         appData.expenses[answerExpenses] = +answerTotal;
//     } else {
//         i--;
//     };

//     i++;
// }
// while (i < 2);

appData.budgetPerDay = appData.budget / 30;
// Только мне кажется, что бюджет это доходы минус расходы,
// а тут просто зарплата делить на кол-во дней
alert('Ежедневный бюджет: ' + appData.budgetPerDay);

if (appData.budgetPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.budgetPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};