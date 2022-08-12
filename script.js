function sum(){
    console.log(arguments);

    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    console.log(sum);

}
sum(20,30);
sum(20, 30, 40);


/* Rest Operator */

function func(name, ...args){
    console.log(arguments);
    console.log(`Hello Abul ${name} `)

    let func = 0;
    for(let i in args){
        func += args[i];
    }
    console.log(func);

}
func("The calculation is",20,30);
func("and the second sum is ", 55,60,20,41)
