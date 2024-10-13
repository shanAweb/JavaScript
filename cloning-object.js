const circle = {
    radius:1,
    draw(){
        console.log("draw");
    }
}
// Below is a good approach to clone an object
const another = {};
for (let key in circle){
   another[key] = circle[key];
}
console.log(another);
// Here is another, modern method to clone an object
const another_object = Object.assign({},circle);
// The above does the same, the upper approach does
console.log(another_object);
// We can do some addition in our new object using this modern approach
const new_object = Object.assign({color: 'yellow'}, circle);
console.log(new_object);
// Courtesy to last line, new_object has all the properties and methods of color object as well as a new property color with value yellow

// Another method (simple one) to clone an object is spread operator
const fresh_object={...circle};
console.log(fresh_object);