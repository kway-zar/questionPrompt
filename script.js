const NO_BUTTON = document.getElementById('no');
var w = Math.floor(window.innerWidth);
var h = Math.floor(window.innerHeight);

console.log(h/3);

NO_BUTTON.addEventListener("mouseover", MOVE_NO_BUTTON);
NO_BUTTON.addEventListener("click", MOVE_NO_BUTTON);

// var rect = NO_BUTTON.getBoundingClientRect();
// var Y_AXIS = rect.y;
// console.log("Y-AXIS:"+Y_AXIS);



function MOVE_NO_BUTTON() {
    
    var x = Math.floor(Math.random()* w);
    var y = Math.floor(Math.random()* h);

    // var rect = NO_BUTTON.getBoundingClientRect();
    // var Y_AXIS = rect.y;
    // console.log("Y-AXIS:"+Y_AXIS);
    console.log("x:" + x);
    console.log("y:" + y);

    NO_BUTTON.style.transform = "translate(" + x + "px," + y +"px)";

    
    

}
