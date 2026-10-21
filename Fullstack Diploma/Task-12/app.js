const order1=document.getElementById("yourorder");
const namemess=document.getElementById("namemess");
const numbermess=document.getElementById("numbermess");
const productmess=document.getElementById("productmess");
const quantitymess=document.getElementById("quantitymess");
const name=document.getElementById("name");
const phone=document.getElementById("number");
const quantity=document.getElementById("quantity");
const Products=document.getElementById("products");
const empty=document.getElementById("empty");
const orderbutton=document.getElementById('btn-order')

order1.addEventListener("submit",function(event){
    let validation=true;
    namemess.innerHTML="";
    numbermess.innerHTML="";
    quantitymess.innerHTML="";
    productmess.innerHTML="";
    event.preventDefault();
if(name.value.trim()==""){
    namemess.innerHTML="name is required";
    validation=false;
}
else if(name.value.trim().length<3){
    namemess.innerHTML="name must be t least 3 chars";
     validation=false;
}
if(phone.value.length<11){
    numbermess.innerHTML="Phone must be 11 digits";
     validation=false;
}
if(quantity.value<1||quantity.value>10||quantity.value==""){
    quantitymess.innerHTML="quantity must be at least one cup";
     validation=false;
}
if(phone.value==""){
    numbermess.innerHTML="Phone number is required"
    validation=false;
}
const phoneRegex = /^01[0-9]{9}$/
if(!phoneRegex.test(phone.value)){
numbermess.innerHTML="phone number must start with 01";
 validation=false;}
 if(Products.value==""){
    productmess.innerHTML='product must be selected ';
     validation=false;
 }
 console.log(validation);
 if(validation){
let price=1;
if(Products.value=="Espresso"){
    price=45;
}
else if(Products.value=="Latte"){
    price=65;
}
else if(Products.value=="Croissant"){
    price=40;
}
 let total=price*quantity.value;
if(quantity.value>=3){
    total=total*0.9;
}
let deliveryfee="";
if(total>200){
    deliveryfee="Free DeliveryFee";
}
empty.innerHTML +=`
<h3> Your order </h3>
<p>Name:${name.value}</p>
<p>PhoneNuber:${phone.value}</p>
<p>Produt:${Products.value}</p>
<p>Quantity:${quantity.value}</p>
<p>Total:${total}</p>
<p>${deliveryfee}</p>
`;
order1.reset();
}

});