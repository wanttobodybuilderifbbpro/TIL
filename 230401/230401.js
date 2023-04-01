//matter of the type of the Number, Sentences
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

//result of operation
let result1 = material2 + material4;
let result2 = Number(material2 + material4);

/* example
let result1 = material2 + material4;
let result2 = Number(result1);
e.g.1. result2 = material1 * material3 + material5;
e.g.2. result2 = material2 + material5;
e.g.3. String(material1) + material5;
e.g.4. material1 + String(material5);
e.g.5. String(material1) + String(material5);
e.g.6. String(material1 * material3 + Number(material4));

숫자 34
e.g.7. material2 * material3 + material5;
e.g.8. material1 * material3 + Number(material4);
e.g.9. Number(String(material1) + material5);
e.g.10.Number(material2 + material4);

좀더 간편하게
e.g.11. result1 = material2 + material4;
result2 = Number(result1);
 */

// make the sentence '34' and number 34.
// please note to the this page.

//test code
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);