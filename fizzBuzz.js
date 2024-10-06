// FizzBUzz
// if number is divisble by 3 => Fizz
// if number is divisible by 5 => Buzz
// if number is divisble by 3 and 5 =>FizzBuzz
// if not divisble by both 3 and 5 => original number
// if typeof input is other than number => Not a Number 

const output = fizzBuzz(30);
console.log(output);
function fizzBuzz(input){
    if (typeof input != 'number'){
        return "Not a Number";
    }
    if (input % 3 === 0 & input % 5 === 0){
        return 'FizzBuzz';
    }
    if (input % 3 != 0 && input % 5 != 0){
        return input;
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
    if (input % 5 === 0){
        return 'Buzz';
    }
return input;
}
