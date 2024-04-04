const message = 'тут нцть символів)))(_._))----';
console.log(message);
console.log('---',message.length);



const quantity = 15;
const orderMsg = `вибрано ${quantity} ківі`;
console.log(orderMsg);


let brand = 'KyoCeRa';
console.log(brand);
console.log(brand[3]);
console.log(brand.slice(1).toLowerCase());
console.log(brand);
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);


const blWord1 = 'спам';
const blWord2 = 'распродажа';

const string1 = 'привет. я поц абдул , ето не спам, купи слона!';
const string2 = 'сам боль распродажа на неделе, не пропусти';


console.log(string1.includes(blWord1));
console.log(string1.includes(blWord2));

console.log(string2.includes(blWord1));
console.log(string2.toLowerCase().includes(blWord2));
// або:
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blWord2));


