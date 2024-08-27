// There we have two equality operators; strict equality & lose equality.
// === strict equality ; (value & type, both should match)
// == lose equality; (only value, type doesn't matter)
x = 1;
console.log("Comparing x with 1 using strict equality");
console.log(x===1);
console.log("lets compare a string '1' with 1 using strict equality");
console.log(x==='1');

console.log("Comapring x with 1 using lose equality");
console.log(x==1);
console.log("lets compare a string '1' with 1 using lose equality");
console.log(x=='1');