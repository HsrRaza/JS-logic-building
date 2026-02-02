//  sum of a gives two numbers

function sum(a, b){
    return a + b;
}

// console.log(sum(2,3));

//  taking args as array
function sumOfArgs(...args){

    if(args.length == 0) return 0
    else if(args.length < 1) return args
    
    let sum = 0;

   for(let i = 0; i<args.length; i++){
       sum+=args[i]
   }
   return sum
}

console.log(sumOfArgs(100, 200, 300,400));
