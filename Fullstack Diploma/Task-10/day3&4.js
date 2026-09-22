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
//////////////////////////////////////////////
/////-----------TASK_DAY 4------------////////
//////////////////////////////////////////////


//////////////////////////////////////////////
///////------PRODUCTS------//////////////////
const products=[
    {
        id:100,
      name:'indomi',
     category:'food',
     price:1,
    inStock:true,
    },
    {
        id:200,
      name:'sugar',
     category:'food',
     price:5,
    inStock:true,
    },
    {
        id:700,
      name:'spicy sauce',
     category:'food',
     price:1,
    inStock:false,
    },
    {
     id:900,
      name:'sushi',
     category:'food',
     price:20,
    inStock:true,
    },{
        id:500,
      name:'handbag',
     category:'accessories',
     price:15,
    inStock:true,
    },
];
console.log(products[0].name);
console.log(products[products.length-1].name);
console.log(products.length);
for(let i=0;i<products.length;i++){
    console.log(products[i]);
}
//or
//for(let i of products){
    //console.log(i);
//}
//////////////////////////////////////////////
///////------SELECTED FILTERS------///////////
 const selectedCategories=new Set();
 selectedCategories.add('food');
  selectedCategories.add('clothes');
 selectedCategories.add('fruits');
  selectedCategories.add('fruits');
for(let s of selectedCategories){
    console.log(s);
}
console.log(selectedCategories.size);
let selected='fruits';
console.log(selectedCategories.has(selected));
//////////////////////////////////////////////
///////------Current User------//////////////
const currentUser={
    id:202414987,
    name:'rita',
   email:'rkhoury3213@gmail.com',
   address:{
    city:'Syria',
    country:'Homs',
   }  
};
console.log(currentUser.address.city);
//////////////////////////////////////////////
///////------SHOPPING CART QUANTITIES------///
const cartQuantity=new Map();
cartQuantity.set(100,2);
cartQuantity.set(200,1);
cartQuantity.set(173,10);
console.log(cartQuantity.get(143));//undefined 
console.log(cartQuantity.get(100));//10
console.log(cartQuantity.has(143));//false
console.log(cartQuantity.has(100));//true
console.log(cartQuantity.size);
//////////////////////////////////////////////
///////------CART TOTAL------/////////////////
function calculateCartTotal(products,cartQuantity)
{
    let total=0;
    for(let o of products){
     const newqua=cartQuantity.get(o.id)||0;
     total+=o.price*newqua;
    }
    return total;
}
console.log(calculateCartTotal(products,cartQuantity));
