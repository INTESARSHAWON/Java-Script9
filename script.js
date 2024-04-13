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


let div1= document.querySelector(".div1");

div1.onmouseover= ()=>{
    console.log ("button was hoverd");
};



let div2= document.querySelector(".div2");

div2.onmouseover=(event)=>{
    console.log(event);
    console.log(event.type);
    console.log(event.target);
};



// event a sobar age sikhlam inline, jeta kaj kora uchit na
// erpor sikhlam JS theke kivabe kaj kora jay
// ebar sikhbo kivabe JS  event listener diye kivabe kaj kora jay, ekhane object o pass kora jay
// eta sobcheye beshi use hoy
// ekhane sorasori event er naam hobe, er age 'on' hobe na...,


