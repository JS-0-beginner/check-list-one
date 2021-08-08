/// node 11.large-numbers-array.js \\\

console.log('');

let numbers = [11, 23, 45 ,67, 80, 106, 97, 96];
console.log('Numbers')
console.log(numbers);
console.log('');

console.log('Numbers that are larger than 80');
for(let number of numbers)
{
    if(number>80)
    {
        console.log(number);
    }
    
}

