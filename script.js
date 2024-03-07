
const NO_BUTTON = document.getElementById('no');
const YES_BUTTON = document.getElementById('yes');
const paragraphQuestion = document.getElementById('question');
var noButtonCounter = 0;
var yesButtonCounter = 0;
var w = Math.floor(window.innerWidth);
var h = Math.floor(window.innerHeight);


NO_BUTTON.addEventListener("mouseover", MOVE_NO_BUTTON);
NO_BUTTON.addEventListener("click", MOVE_NO_BUTTON);

YES_BUTTON.addEventListener("click", ()=> {

    yesButtonCounter++;

    if(yesButtonCounter == 1 && noButtonCounter < yesButtonCounter) {

        console.log(true);
        paragraphQuestion.innerHTML = "Are you Sure?";
        paragraphQuestion.style.textShadow = "0 0 40px #944E63";
    }
    
    paragraphQuestion.innerHTML = "OKAY POOKIE😘🥰";
    // emailjs.init("TVlNoW4QZZp1T2Y1C");
    // emailjs.send("service_sruoekf","template_btz2x4p")
    //     .then(function(response) {
    //         console.log("SUCCESS",response.status,response.text);
    //     }, function(error) {
    //         console.log("FAILED",error);
    //     });
    
});

function MOVE_NO_BUTTON() {
    
    noButtonCounter++;

    var x = Math.floor(Math.random()* w/4);
    var y = Math.floor(Math.random()* h);

    if(y > 150) {

        console.log(true);

        y = Math.sqrt(y) *0.5;
        y = Math.pow(y,2);
    }
    
    console.log("x:" + x);
    console.log("y:" + y);

    NO_BUTTON.style.transform = "translate(" + x + "px," + y +"px)";
    

}
