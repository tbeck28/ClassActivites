

const doc1 = document.getElementsByTagName('p');
doc1[0].textContent = 'hello'

doc1[0].style.backgroundColor = 'blue'

function doc (name, place, element, description) {
    name = document.createElement(element);
    document.querySelector(place).appendChild(name)
    name.textContent = description;
}

doc('h3', 'main', 'h3', 'how to get multiple elements')

doc('p', 'main', 'p', 'three common ways:')


doc('multiple', 'main', 'ul', '')

doc('li', 'ul', 'li', 'getElementsByClassName(): selects all elements with a specified class name')

doc('li', 'ul', 'li', 'getElementsByTagName(): selects all elements with a specified tag name')

doc('li', 'ul', 'li', 'querySelectorAll(): uses a css selector to select all matching elements')



