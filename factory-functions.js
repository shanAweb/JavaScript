function createCircleObject(radius) {
    return {
        // in the below line only gave radius because the property name and value, both are radius. So, in modern JS if property name and value are same giving name once is enough. 
        // Like; below radius is equal to radius: radius,
    radius, 
    draw(){
        console.log("draw");
    }
}
}
const circle1=createCircleObject(1);
console.log(circle1);