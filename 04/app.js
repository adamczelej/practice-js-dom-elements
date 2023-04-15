console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ul = document.createElement('ul');
nav.appendChild(ul);

// const li1 = document.createElement('li');
// const aLi1 = document.createElement('a');
// li1.appendChild(aLi1);
// aLi1.innerText = 'Start';
// aLi1.setAttribute('href', '/')

// const li2 = document.createElement('li');
// const aLi2 = document.createElement('a');
// li2.appendChild(aLi2);
// aLi2.innerText = 'Galeria';
// aLi2.setAttribute('href', '/gallery')

// const li3 = document.createElement('li');
// const aLi3 = document.createElement('a');
// li3.appendChild(aLi3);
// aLi3.innerText = 'Kontakt';
// aLi3.setAttribute('href', '/contact')

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

menuItems.forEach(function(elem){
    const li = document.createElement('li');
    ul.appendChild(li);
    const aElem = document.createElement('a');
    li.appendChild(aElem);

    aElem.innerText = elem.text;
    aElem.href = elem.url;
});