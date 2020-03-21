// var money = prompt ("Ваш бюджет на месяц?");
// var time = prompt ("ВВедите дату");

let money, time; 

function start () {
   money = +prompt ("Ваш бюджет на месяц?");
   time = prompt ("ВВедите дату");

   while((isNaN(money)) || (money=='') || (money==null)){
    money = prompt ("Ваш бюджет на месяц?"); 
   }
}

start ();

appData = {
budget:money,
timeData:time,
expenses: {},
optionalExpenses:{},
income: [],
savings: true,
choseExpenses: function() {
    for (var i=0; i<2; i++) {
        var a = prompt('Введите обязательную статью расходов в этом месяце');
        var b = +prompt('Во сколько обойдется?');
        if((typeof(a)==='string') && (a!=null) && (b!=null) && (a !='') && (a!='') && (a.length<50))
        {
            appData.expenses[a]=b;
        }
        else {
            alert("SMTH is wrong");
            i = i-1;
        }
    }
},
detectedDayBudget: function () {
    appData.moneyPerDay=(appData.budget/30).toFixed;
    alert("Ежидневный бюджет "+appData.moneyPerDay)
},
checkSavings:function () {
    if (appData.savings==true) {
        var save = +prompt("Какова сумма накоплений?"),
            peercent = +prompt("Под какой процент?");
        
            appData.monthIncome = save/100/12*peercent;
            alert("Доход в месяц с Вашего депозита: "+appData.monthIncome)
    }
},
chooseOptExpenses:function(){
    for(let i =0; i<3; i++){
        let opt = prompt('Статья необизательных расходов');
        appData.optionalExpenses[i]=opt;
    }
},
chooseIncome:function () {
    let item=prompt("Введите варианты доходов?(ВВедите через запятую)", "");
    while ((item==null) || (!isNaN(item)) || (item == '')){
        item=prompt("Введите варианты доходов?(ВВедите через запятую)", "");
    }
    appData.income=item.split(', ');
    appData.income.push(prompt("Что-то еще добавите?"));
    appData.income.sort();
    
    appData.income.forEach((element, i) => {
        // alert(i++);
        alert(element);
        
    });

}

};

for (let test in appData) {
   
    console.log("Наша программа включает в себя данные: "+ test)
}
console.log(appData);