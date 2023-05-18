// Write a program that generates a multiplication table for a given number using a for loop.

function multiplicationTable (num){
    var product=1;
    for (var i=1; i<=10; i++){
        product=num*i;
        console.log(num+" x " + i+ " = "+ product);
    }
}
multiplicationTable(10);