// const x = require('./script2' )// will not work
 console.log('Hello World');
// console.log("the ancver is ${x}");

const fruitForm = document.querySelector('#inputSection form')

const fruitList = document.querySelector('#fruitSection ul')

const addFruit = fruit => {
    const li = document.createElement('li')
    li.textContent = fruit;
    fruitList.appendChild(li)
}


fruitForm.addEventListener('submit', e =>  {
    e.preventDefault()
    addFruit(e.target.fruitInput.value)
    e.target.fruitInput.value = ''

})
console.log(fruitForm)  