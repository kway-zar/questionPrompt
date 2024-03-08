
const NO_BUTTON = document.getElementById('no');
const YES_BUTTON = document.getElementById('yes');
const questionElement = document.getElementById('question');
const AuthorStatement = document.getElementById('AuthorStatement');

const QUESTION = ["Are you my pookie!??", "Still No??","I beg you🥺", "One more NO and I'll-","...shut up now😔"];


var noButtonCounter = 0;
var yesButtonCounter = 0;
var w = Math.floor(window.innerWidth);
var h = Math.floor(window.innerHeight);



NO_BUTTON.addEventListener("mouseover",MOVE_NO_BUTTON);
NO_BUTTON.addEventListener("click",MOVE_NO_BUTTON);

YES_BUTTON.addEventListener("click", ()=> {

    yesButtonCounter++;
    if(yesButtonCounter == 1 && noButtonCounter < yesButtonCounter) {

        console.log(true);
        AuthorStatement.innerHTML = "Are you Sure?";
        AuthorStatement.style.textShadow = "0 0 40px #944E63";
        
    } else if(noButtonCounter> yesButtonCounter && yesButtonCounter == 1) {

        ENDSession();

    } else if(yesButtonCounter > 1) {
        ENDSession();
    }
    
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
    console.log(noButtonCounter);

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
    switch(noButtonCounter) {

        case 1: questionElement.innerHTML = QUESTION[0];
            break;
        case 2: questionElement.innerHTML = QUESTION[1];
            break;
        case 3: questionElement.innerHTML = QUESTION[2];
            break;
        case 4: questionElement.innerHTML = QUESTION[3];
            break;
        case 5: questionElement.innerHTML = QUESTION[4];
                AuthorStatement.style.opacity = "1";
                AuthorStatement.innerHTML = "Just try to hold 'Yes' and tap it again🤭";
                YES_BUTTON.style.animation = "1s ease-in-out 0.3s infinite alternate bounce";
            break;
    }

}

function ENDSession() {
    questionElement.innerHTML = QUESTION[0];
    AuthorStatement.innerHTML = "OKAY POOKIE😘🥰";
}
