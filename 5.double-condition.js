/// node 5.double-condition.js \\\

let year = 1996;

if((year%4==0 && year%100!=0) || year%400==0)
{
    var leapyear = "It's a Leapyear.";
}
else
{
    var leapyear = "This is not a Leapyear";
}
console.log(leapyear);
