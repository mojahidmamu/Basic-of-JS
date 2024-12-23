//  1. Where to add
 const placelist = document.getElementById(' place-list')
//  2. What to be added
const li = document.createElement('li');
li.innerText = 'chatabon'
// 3. add the child 
placelist.append(li);
// // step-1
// const placelist2 = document.getElementById('place-list');
// // step-2
// const li2 = document.createElement('li2');
// // step-3
// li.innerText = 'batakaldi';

// 
const maincontent = document.getElementById('main-content');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'My Food List';
section.appendChild(h1);

// Child-1
const li1 = createElement('li');
li1.innerText = 'Rice';
ul.appendChild(li1);
// Child-2
const li2 = createElement('li');
li2.innerText = 'Salad';
ul.appendChild(li2);
// Child-3
const li3 = createElement('li');
li3.innerText = 'Fish';
ul.appendChild(li3);

section.appendChild(ul);
maincontent.appendChild(section)

// set inneerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
<li>Panjabi</li>
<li>T- Shirts</li>
<li>Lungi</li>
<li>Santo-ganji</li>
</ul>

`
maincontent.appendChild('sectionDress');

