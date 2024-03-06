const NO_BUTTON = document.getElementById('no');
var w = Math.floor(window.innerWidth);
var h = Math.floor(window.innerHeight);


NO_BUTTON.addEventListener("mouseover", MOVE_NO_BUTTON);
NO_BUTTON.addEventListener("click", MOVE_NO_BUTTON);


function MOVE_NO_BUTTON() {
    
    var x = Math.floor(Math.random()* w/4)-1;
    var y = Math.floor(Math.random()* h);

    if(y > 150) {

        console.log(true);

        y = Math.sqrt(y);
    }
    
    console.log("x:" + x);
    console.log("y:" + y);

    NO_BUTTON.style.transform = "translate(" + x + "px," + y +"px)";

      

}
