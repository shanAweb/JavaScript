let hour = 22; 
if(hour > 6 && hour <12){
    console.log("Good Morning");
}
else if(hour > 12 && hour < 16){
    console.log("Good Afternoon");
}
else if(hour > 16 && hour < 20){
    console.log("Good Evening");
}
else if(hour > 20 && hour < 24){
    console.log("Good Night");
}
else{
    console.log("Wrong Time");
}