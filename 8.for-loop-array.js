/// node 8.for-loop-array.js \\\

console.log('');
console.log('FOR-OF >>>>>>>>>>>>');
console.log('');

let names = ['abir', 'likhon', 'arko', 'pranto', 'shakil', 'sayad', 'arafat'];

const name = 0;
for(const name of names)
{
    console.log(name);
}

console.log('');
console.log('FOR-General >>>>>>>>>>>>');
console.log('');

for(i=0;i<names.length;i++)

{
    const array = names[i];
    console.log(array);
}