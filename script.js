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




let button4= document.querySelector(".button4");

button4.addEventListener ("click", (event)=> { 
    console.log("button4 was clicked");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
});



let button5= document.querySelector(".button5");

button5.addEventListener ("dblclick", (event)=>{
    console.log("button5 was double clicked");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
});



//eta hocche removeEventListener. remove koray...,age memoryr eki jaygay save kore tarpor okhan theke dlt kora jabe 

let button6= document.querySelector(".button6");

const dltbutton= ()=>{
    console.log("button6 was clicked");
};

button6.addEventListener ("click", button6);
button6.removeEventListener ("click", button6);



//


let div3= document.querySelector(".div3");

div3.addEventListener ("mouseover", (event)=>{
    console.log("div was hovered");
    console.log(event.type);
    console.log(event.target);
});



let toggleButton = document.querySelector(".button7");
let currentMode= "light";

toggleButton.addEventListener ("click", () =>{
    if (currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    // console.log(currentMode);
});


