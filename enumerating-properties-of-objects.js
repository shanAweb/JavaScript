const circle={
    radius:1,
    draw(){
        console.log("draw");
    }
}
for (let key in circle){
    console.log(key);
}
for (let key in circle){
    console.log(circle[key]);
}
// in below loop Object.keys(circle) returns an array(1 single array) so we can use for-of loop, otherwise for-of loop is for iterables' and object is not one of them
for (let key of Object.keys(circle)){
    console.log(circle[key]);
}

// Below loop returns the separate array for each property with its value
for (let entry of Object.entries(circle)){
    console.log(entry);
}