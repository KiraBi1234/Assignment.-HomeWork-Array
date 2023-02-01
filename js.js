let array = [39, 2, 7, 4, 35, 10];


function sumArray(){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sumArray());