const name='Sara';
const bookTitle='JavaScript Basics';
let pbook=150;
let nbook='3';
let scost=30;
let firstName='Rita';
let LastName='Khoury';
let fullName=firstName+LastName;
let FullName=`${firstName} ${LastName}`;
console.log(fullName);
console.log(FullName);
nbook=Number(nbook);
console.log(nbook);
console.log(typeof nbook);
let total=pbook *nbook;//450;
let finalTotal=total+scost;//480
console.log(`
Customer: ${FullName}
Book: ${bookTitle}
Quantity: ${nbook}
Subtotal: $${total.toFixed(2)}
Shipping: $${scost.toFixed(2)}
Total: $${finalTotal.toFixed(2)}
`);

















