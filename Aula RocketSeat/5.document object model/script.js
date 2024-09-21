/*
// getElementById()
const element = document.getElementById("blog-title");
console.log(element);
*/

/*
// getElementByClassName()
const elements = document.getElementsByClassName("one");
console.log(elements);
*/

/*
// getElementsByTagName()
const elements = document.getElementsByTagName("h1");
console.log(elements);
*/

/*
// querySelector()
const element = document.querySelector("[src]");
console.log(element);
*/

/*
// querySelectorAll()
const elements = document.querySelectorAll(".one");
console.log(elements);
*/

/*
Qual usar?

// getElementById (element)
// getElementByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)
*/

// Manipulando conteúdo
/*
// textContent
const element = document.querySelector("h1");
element.textContent += " Olá Devs!";

console.log(element.textContent);
*/

/*
// innerText
const element = document.querySelector("h1");
element.innerText = " Olá Devs!";
*/

/*
// innerHTML
const element = document.querySelector("h1");
element.innerHTML = " Olá Devs! <small>!!!</small>";
*/

/*
// value
const element = document.querySelector("input");
console.log(element.value)
element.value = "outro valor"
*/

/*
// Atributos
const header = document.querySelector("header");
header.setAttribute("id", "header");

const headerID = document.queryselector("#header");

console.log(headerID.getAttribute("class"));

header.removeAttribute("id");

header.setAttribute("class", "bg header");
*/

/*
// Alterando estilos
const element = document.querySelector("body");

element.style.backgroundColor = "f9f3D2";
console.log(element.style.backgroundColor);
*/
