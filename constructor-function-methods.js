const arr = ['1','2','3'];
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
      console.log("draw");
    }
}
console.log(Circle.call({},1));
// The above line is same to const circle = new Circle(1);
console.log(Circle.apply({},arr));
// The above line is used to add arguements as an array;