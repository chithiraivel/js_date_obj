
// js Math

// const a =Math.floor(4.5);
// console.log(a);

// const b = Math.ceil(4.4);
// console.log(b);

// const c = Math.round(4.4);
// console.log(c);

// const d = Math.trunc(4.5);
// console.log(d);

//positive value return +1 negative value return -1
// const e = Math.sign(-4);
// console.log(e);

// const f = Math.pow(8,2);
// console.log(f);

// const g = Math.sqrt(64);
// console.log(g);

// const h = Math.abs(-4);
// console.log(h);


// js date object


const birthday = new Date();
console.log(birthday);
const date1 = birthday.getDate();
console.log(date1);

const year1 = birthday.getFullYear();
console.log(year1);

const hours = birthday.getHours();
console.log(hours);

const seconds = birthday.getMilliseconds();
console.log(seconds);

const minutes = birthday.getMinutes();
console.log(minutes);


console.log(birthday.getUTCDate());
console.log(birthday.getUTCDay());
console.log(birthday.getUTCSeconds());
console.log(birthday.getUTCMinutes());
console.log(birthday.getUTCDate());
console.log(birthday.getUTCFullYear());



const event1 = new Date('August 19, 1975 23:15:30');

event1.setDate(24);

event1.setMinutes(34);
// event1.setTime(7)
console.log(" minutes" + event1);

console.log(event1.getDate());
// expected output: 24

event1.setDate(32);
// Only 31 days in August!

console.log(event1.getDate());


const event2 = new Date('August 19, 1975 23:15:30');
event2.setHours(20);

console.log(event2);
// expected output: Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)


event2.setHours(20, 21, 22);

console.log(event2);
// expected output: Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)
