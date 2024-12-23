console.log( 'oii mama na plz');
// single element selector
const header = document.getElementById('header');
 header.style.color = 'red';

 const uniquepara = document.querySelector('#unique-para');
  // uniquepara.style.border = '2px solid red'



  // multiple element selector
  const myTags = document.getElementsByTagName("p");


  for (let i = 0; i < myTags.length; i++) {
     const element = myTags[i];
     element.style.backgroundColor =  "green";
     element.style.fontSize = '20px'
  }

  const allClass = document.getElementsByClassName('info');
  for (const element of  allClass) {
    element.style.border =  " 5px solid white";  
  }

const myAllpara = document.querySelectorAll('.info')
 

// Node vs Element in DOM
const containerinfo = document.querySelector('.container');
 
// Parent Element
// Next Sibling
// Previous Sibling
// Child Element

const item2 = document.getElementById('item2');
 const parent = item2.parentElement;

 const nextSibling = item2.nextElementSibling;
 
 const previousSibling  = item2.previousElementSibling;
 

// Inner Text || Inner HTML  || textContent
const container4 = document.querySelector('.container4');
// console.log( container4.innerText);
// console.log( container4.innerHTML);
// console.log( container4.textContent);

// setAttribute || getAttribute || removeAttribute

const myBtn = document.getElementById('myButton');
myBtn.setAttribute('class', 'btn btn-primary');
myBtn.setAttribute('disabled', true);


const container5 = document.querySelector('.container5');
// console.log( container5);

const p = document.createElement('p');
p.innerText = 'I am a student of programming Hero';
container5.appendChild(p);
// console.log( p);

const h1 = document.createElement('h1');
h1.innerText = 'My name is Abdullah all Mojahid';
/**
 *  class name add in the h1 tag: 2 type in the below;
 *  class name remove in the h1 tag: in the below
 */

// h1.classList.add ('common-class');
h1.className = 'common-class'
h1.classList.remove('common-class')
/**
 * 
 */
container5.appendChild(h1);


// remove and removeChild

// container5.remove();
 container5.removeChild(h1);

