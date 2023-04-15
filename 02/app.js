console.log('DOM');
const links = document.querySelectorAll('[data-url]');

if(links) {
    links.forEach(function(elem){
        const attr = elem.getAttribute("data-url");
        elem.setAttribute('href', attr);
    });
}