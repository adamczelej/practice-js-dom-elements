console.log('DOM');

const elem = document.querySelector(".comments__item.comments__item--newest");
console.log(elem);
if(elem) {
    const checkAttribute = elem.querySelectorAll('[data-info]');
    console.log(checkAttribute);
    console.log('Zostało znalezionych: ' + checkAttribute.length + ' element/y');
}

