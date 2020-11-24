var inkomsterna = [];
var utgifterna = [];




function inkomstFunktioner (event){

    event.preventDefault();


    console.log("hej")


var beskrivning = document.querySelector("#beskrivning").value;
var värde = document.querySelector("#värde").value;

inkomsterna.push (Number (värde))

var inkomstTotal = document.querySelector(".inkomstTotal")

var summa = 0;
for(var i=0; i<inkomsterna.length; i++) {
    summa += inkomsterna [i];
}

inkomstTotal.innerText = summa;

var li = document.createElement("li")

li.innerText= beskrivning + " : " + värde;

var ul = document.querySelector(".inkomster");
ul.appendChild(li);

}



var btn = document.querySelector(".läggTill1");

btn.addEventListener("click" , inkomstFunktioner );




function utgiftsFunktioner (event){

    event.preventDefault();


    console.log("hej")


var beskrivning2 = document.querySelector("#beskrivning2").value;
var värde2 = document.querySelector("#värde2").value;

utgifterna.push (Number (värde2))

var utgiftTotal = document.querySelector(".utgiftTotal")

var summa2 = 0;
for(var i=0; i<utgifterna.length; i++) {
    summa2 += utgifterna [i];
}

utgiftTotal.innerText = summa2;

var li2 = document.createElement("li")

li2.innerText= beskrivning2 + " : " + värde2;

var ul2 = document.querySelector(".utgifter");
ul2.appendChild(li2);
}


var btn = document.querySelector(".läggTill2");

btn.addEventListener("click" , utgiftsFunktioner ); 