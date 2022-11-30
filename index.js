let homescore=document.getElementById("homereqem");
let homeinitialscore=0;
let guestscore=document.getElementById("guestreqem");
let guestinitialscore=0;
function addhome1(){
    homeinitialscore ++;
    homescore.textContent=homeinitialscore;
}
function removehome1(){
    homeinitialscore--;
    homescore.textContent=homeinitialscore;
    if(homeinitialscore<=0){
        homeinitialscore=0;
        homescore.textContent=0;
    }
}
function removehome2(){
    homeinitialscore-=2;
    homescore.textContent=homeinitialscore;
    if(homeinitialscore<=0){
        homeinitialscore=0;
        homescore.textContent=0;
    }
}
function removehome3(){  
    homeinitialscore-=3;
    homescore.textContent=homeinitialscore;
    if(homeinitialscore<=0){
        homeinitialscore=0;
        homescore.textContent=0;
    }  
}
function addhome2(){
    homeinitialscore +=2;
    homescore.textContent=homeinitialscore;
}
function addhome3(){   
    homeinitialscore +=3;
    homescore.textContent=homeinitialscore;
}
function addguest1(){
    guestinitialscore++;
    guestscore.textContent=guestinitialscore;
}
function addguest2(){ 
    guestinitialscore+=2;
    guestscore.textContent=guestinitialscore;
}
function addguest3(){
    guestinitialscore+=3;
    guestscore.textContent=guestinitialscore;
}function removeguest1(){
    guestinitialscore-=1;
    guestscore.textContent=guestinitialscore;
    if(guestinitialscore<=0){
        guestinitialscore=0;
        guestscore.textContent=0;
    }     
}
function removeguest2(){
    guestinitialscore-=2;
    guestscore.textContent=guestinitialscore;
    if(guestinitialscore<=0){
        guestinitialscore=0;
        guestscore.textContent=0;
    }  
}
function removeguest3(){
    guestinitialscore-=3;
    guestscore.textContent=guestinitialscore;
    if(guestinitialscore<=0){
        guestinitialscore=0;
        guestscore.textContent=0;
    } 
}
function restart(){
    homeinitialscore=0;
    homescore.textContent=homeinitialscore;
    guestinitialscore=0;
    guestscore.textContent=guestinitialscore;
}