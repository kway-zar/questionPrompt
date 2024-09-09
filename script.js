
const NO_BUTTON = document.getElementById('no');
const YES_BUTTON = document.getElementById('yes');
const questionElement = document.getElementById('question');
const AuthorStatement = document.getElementById('AuthorStatement');
const HTMLelement = document.querySelector('html');
const gif = document.getElementById('gif');
const div = document.getElementById('img-container'); 
const strawberry = document.getElementById('strawberry-png');

const QUESTION = ["Are you my pookie!??","WHAT!??", "Still No??","I beg you🥺", "One more NO and I'll-","I'll...shut up now😔"];


var noButtonCounter = 0;
var yesButtonCounter = 0;
var w = Math.floor(window.innerWidth);
var h = Math.floor(window.innerHeight);
var userIP;


if(w < 850) {

    window.location.replace('unsupported_page/unsupported.html');
}

// HTMLelement.style.height = (h + 50) + "px";
// HTMLelement.style.width = w + "px";
strawberry.style.width = w + "px";

questionElement.innerHTML = QUESTION[0];
NO_BUTTON.addEventListener("mouseover",MOVE_NO_BUTTON);
NO_BUTTON.addEventListener("click",MOVE_NO_BUTTON);

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the IP address from the API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            userIP = data.ip;
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});

YES_BUTTON.addEventListener("click", ()=> {

    yesButtonCounter++;
    if(yesButtonCounter == 1 && noButtonCounter < yesButtonCounter) {

        console.log(true);
        questionElement.innerHTML = "Are you Sure?";
        
    } else if(noButtonCounter> yesButtonCounter && yesButtonCounter == 1) {
        ENDSession();

    } else if(yesButtonCounter > 1) {
        ENDSession();
    }   
    
});

function MOVE_NO_BUTTON() {
    
    noButtonCounter++;
    console.log(noButtonCounter);

    var x = Math.floor(Math.random()* w/4);
    var y = Math.floor(Math.random()* h/2.5);

    if(y > 150) {

        console.log(true);
        
        y = y/2;
    }
    NO_BUTTON.style.transform = "translate(" + x + "px," + y +"px)";
    console.log("x:" + x);
    console.log("y:" + y);
   
    switch(noButtonCounter) {

        case 1: questionElement.innerHTML = QUESTION[1];
            break;
        case 2: questionElement.innerHTML = QUESTION[2];
            break;
        case 3: questionElement.innerHTML = QUESTION[3];

            break;
        case 4: questionElement.innerHTML = QUESTION[4];
            break;
        case 5: questionElement.innerHTML = QUESTION[5];
                AuthorStatement.style.opacity = "1";
                AuthorStatement.innerHTML = "Just try to hold 'Yes' and tap it again🤭";
                YES_BUTTON.style.animation = "1s ease-in-out 0.3s infinite alternate bounce";

            break;
        case 10:questionElement.innerHTML = "stop wasting ur time🤦🏻‍♂️";
                AuthorStatement.innerHTML = "JUST HIT THE Y-E-S BUTTON🙄";

                gif.src = "assets/anime-pat.gif";

            break;
        
    }
}

function ENDSession() {

    var templateParams = {

        yes: yesButtonCounter,
        no: noButtonCounter,
        IP: userIP,
    };

    emailjs.init("TVlNoW4QZZp1T2Y1C");
    emailjs.send("service_sruoekf","template_btz2x4p",templateParams)
        .then(function(response) {
            console.log("SUCCESS",response.status,response.text);
        }, function(error) {
            console.log("FAILED",error);
        });
    noButtonCounter = 11;
    questionElement.innerHTML = "GUD😘🥰";
    AuthorStatement.style.opacity = "1"; 
    gif.src = "assets/gojo-satoru.gif";      
    AuthorStatement.innerHTML = "OKAYYYY😇🥳";
}
