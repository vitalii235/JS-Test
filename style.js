var money = prompt ("Ваш бюджет на месяц?");
var time = prompt ("ВВедите дату");



appData = {
budget:money,
timeData:time,
expenses: {},
optionalExpenses:'',
income: [],
savings: false,
};



for (var i=0; i<2; i++) {
    var a = prompt('Введите обязательную статью расходов в этом месяце');
    var b = +prompt('Во сколько обойдется?');
    if((typeof(a)==='string') && (a!=null) && (b!=null) && (a !='') && (a!='') && (a.length<50))
    {
        alert('Well done');
        appData.expenses[a]=b;
    }
    else {
        alert("SMTH is wrong");
    }
}
// let i =0;

// while (i<2) {
//         var a = prompt('Введите обязательную статью расходов в этом месяце');
//         var b = +prompt('Во сколько обойдется?');
        
//         if((typeof(a)==='string') && (a!=null) && (b!=null) && (a !='') && (a!='') && (a.length<50))
//         {
//             alert('Well done');
//             appData.expenses[a]=b;
//         }
//         else {
//             alert("SMTH is wrong");
//         }
//         i++;
//     }






alert("Бюджет на день"+" "+appData.timeData+" "+"Составляет"+" "+appData.budget/30)


console.log(appData);