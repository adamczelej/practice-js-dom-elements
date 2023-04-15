console.log('DOM');

const curr = document.querySelector('.js-curr');
const newBtn = document.createElement('button');
const currParent = curr.parentElement;
currParent.appendChild(newBtn);
newBtn.innerText = 'Usuń z Koszyka';

const currSiblingsArr = Array.from(currParent.children);
console.log(currSiblingsArr);

currSiblingsArr.forEach(function(elem, iterator){
    elem.classList.add("siblings");
    console.log(elem);
});

const currParentSibling = currParent.nextElementSibling;
currParentSibling.setAttribute('title', 'nextElementSibling');


const currParentSiblingNext = currParentSibling.nextElementSibling;
const childrenArr = Array.from(currParentSiblingNext.children);

const paragraph = document.createElement('p');
currParentSiblingNext.insertBefore(paragraph, childrenArr[childrenArr.length - 1]);

const parentContainer = currParentSiblingNext.parentElement;
const parentContainerChildren = Array.from(parentContainer.children);

const newSection = currParentSibling.cloneNode(true);
parentContainer.insertBefore(newSection, parentContainerChildren[0]);