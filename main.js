// console.log("Запуск модуля main");
// import * as module1 from "./module1.js"
// console.log(module1.a);
let a = 1

function test()
    {
    a++
    console.log(a)
    if (a == 5)
        {
        console.log("Выполнение рекурсии завершено")
        return(a)
        }
    test()
    }
    
test()
