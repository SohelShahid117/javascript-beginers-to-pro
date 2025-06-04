console.log("day2");
//82. Declaring strings and string literals
let text1 = "hello sohel";
let text2 = "hello Aadil";
let text3 = `hello Abdullah`;
console.log(text1);
console.log(text2);
console.log(text3);

let p1 = "Aadil";
let p2 = "Shahid";

let greeting = `hello ${p1},"How r u?"`;
console.log(greeting);
let fun = 'javascript is "fun"';
console.log(fun);

let poem = "Poem is \nMultiline";
let poem2 = `Poem 
is Multiline`;
console.log(poem);
console.log(poem2);

//83. String methods: length, toUpperCase(), toLowerCase(), slice(), substring(), etc.
console.log("poem length " + poem.length);
console.log("poem2 length " + poem2.length);
console.log(poem.toLocaleUpperCase());
console.log(poem2.toLowerCase());
console.log(poem.toUpperCase());

//slice() method extract a part from string

let phrase = "welcome to javascript";
console.log(phrase.slice(0, 11));
console.log(phrase.slice(11, -1));
console.log(phrase.slice(11, phrase.length).toUpperCase());
// console.log(phrase.slice(11, phrase.length).toUpperCase());
console.log(phrase.substring(11, 1)); //substring not accept -ve value
console.log(phrase.substring(11, phrase.length));

const word = "                      coding!!!         ";
console.log(word);
console.log(word.trim());

//84. Template literals and string
let x = 5,
  y = 6.66,
  sum;
sum = x + y;
console.log(sum);
console.log(`sum of x & y is : ${x + y}`);

//85. Basic number operations: addition, subtraction, multiplication, division

let a = 7.88888888,
  b = 9.4444444444444,
  add = a + b;
console.log(`sum of ${a} and ${b} = ${add.toFixed(3)}`);
console.log(`subtraction of ${a} and ${b} = ${(a - b).toFixed(2)}`);
console.log(`mul of ${a} and ${b} = ${(a * b).toFixed(2)}`);
console.log(`div of ${a} and ${b} = ${(a / b).toFixed(3)}`);

let x1=10,y1=5,z1=2
let result = (x1+y1)*z1-(y1/z1)
console.log(result)
