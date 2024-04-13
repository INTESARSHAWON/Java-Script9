//mouse er dui tinta event e amra ekhlam MDN events a gele onk kichu ache, ja khub ekta use hoy na

//onclick= "console.log ('button was clicked'); alert('hello');"
//ondblclick= "console.log ('button was clicked'); alert('hello');"
//onmouseover= "console.log ('button was hoverd');"
// eishob event inline a o handle kora jay, but JS er power beshi, dui jaygay code hole ekhane ja ashe tai ashbe


let button1= document.querySelector(".button1");

button1.onclick= ()=>{
    console.log ("button was clicked");
};


let button2= document.querySelector(".button2");

button2.ondblclick= ()=>{
    console.log ("button was clicked");
    alert ("yes or no");

};


let button3 = document.querySelector(".button3");

button3.onclick= (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
};
