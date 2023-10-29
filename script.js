// he area of the rectangle
var length = 5;
var width = 6;
var rectangle_area =length*width;
console.log(`The area of the rectangle is: ${rectangle_area}`);

// C to F

var C = 40;
var reselt_F = (C*1.8)+32;
console.log(`${C}C is ${reselt_F}F`);
var F = reselt_F;
var result_C = (F-32)/1.8;
console.log(`${F}F is ${result_C}C`);



// hours to seconds

var hours=3;
var seconds=60;
var result= hours*seconds;
console.log(`${hours} hours = ${result} seconds`);

// if else 
var grade = 100 ;
if (grade>=95){
 console.log("+A");
}else if (grade>=90) {
    console.log("A");
}else if (grade>=85) {
    console.log("+B");
} else if (grade>=80) {
    console.log("B");
}else if (grade>=75) {
    console.log("+C");
} else if (grade>=60) {
    console.log("C");
} else if (grade>=55) {
    console.log("+D");
} else if (grade>=50) {
    console.log("D");
}else {
    console.log("F");
}