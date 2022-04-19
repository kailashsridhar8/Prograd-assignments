//The .filter() Method 

const ageArray=[19, 21, 33, 12, 14];

const eligibleAgeArray= ageArray.filter(n=>{ 
    return n>18;
});

console.log(eligibleAgeArray);