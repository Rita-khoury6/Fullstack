const ageInput="20";
const hasTicket=true;
const isMember=false;
const ticketType="vip";
const availableSeats=5;
const age=Number(ageInput);
 isAdult=age>=18;
console.log(age);
console.log(typeof age);
console.log(isAdult);
 const canEnter=isAdult&&hasTicket&&availableSeats>0;
if(canEnter){
    console.log("Acess granted");
} 
else{
    console.log("Acess denied");
}
let ticketPrice;
if(canEnter){
if(ticketType=="reguler"){
    ticketPrice=200;
}
else if(ticketType=="vip"){
    ticketPrice=500;
}
else if(ticketType=="student"){
    ticketPrice=150;
}
else{
    console.log("Unkown ticket type");
}
}
else{
    ticketPrice=0;
}

let finalPrice=ticketPrice;
if(isMember){
   finalPrice-=50;
}
if(finalPrice<0){
    finalPrice=0;
}
console.log(`
    age=${age};
    isAdult=${isAdult};
    hasTicket=${hasTicket};
    availableSeats=${availableSeats};
    canEnter=${canEnter};
    ticketType=${ticketType};
    isMember=${isMember};
    finalPrice=${finalPrice};
    `)
    const acceptedTerms=false;//boolean 
  if(acceptedTerms){
        console.log("Terms Accepted");
    }
    else{
          console.log("Terms not Accepted");
    }
    //or
    /*  if(!acceptedTerms){
          console.log("Terms not Accepted");
    }
    else{
        console.log("Terms Accepted");
        
    }*/