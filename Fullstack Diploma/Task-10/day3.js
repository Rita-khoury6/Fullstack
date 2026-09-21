function analyzeRange(start,end){
if(start>end){ 
    return('Invalid Range');

} 
let OddCounter=0;
let EvenCounter=0;
let totale=0;
let total=0;
for(let i=start;i<end;++i){
    if(i%2===0){
        EvenCounter++;
        totale+=i;
    }
    else{
        OddCounter++;
    }
    total+=i;
}
return`Even numbers :${EvenCounter},
odd numbers :${OddCounter} ,
EvenToatal :${totale},
Total :${total}`;

}
let RangeResult=analyzeRange(2,16);
console.log(RangeResult);
////////////////////////////////////////////
//--------------BONUS------------///////////
////////////////////////////////////////////
function countMultiples(start,end,divisor){
    let dividedNumbers=0;
    for(let i=start;i<=end;++i){
        if(i%divisor===0){
            dividedNumbers++;
        }
    }
        return dividedNumbers;
    }
    let result=countMultiples(1,5,2);
    console.log(result);
