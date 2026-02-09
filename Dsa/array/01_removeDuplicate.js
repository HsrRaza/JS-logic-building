// Remove Duplicates from  Array

function removeDup(...num){
    let uniqueArr = []
    for(let i= 0 ; i< num.length; i++){
        if(!uniqueArr.includes(num[i])){
            uniqueArr.push(num[i])
        }
    }

    return uniqueArr
}


// console.log(removeDup(4,6,2,2,1,1));

function duplicate(num){

    let x = 0
    

    for(let i = 0; i< num.length; i++){
        if(num[i] !== num[x]){
            x++;
            num[x] = num[i]

        }
    }

    return x+1
}

console.log(duplicate([1,1,2,3,3]));




