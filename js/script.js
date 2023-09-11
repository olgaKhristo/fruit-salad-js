// const x = require('./script2' )// will not work
 console.log('Hello World');
// console.log("the ancver is ${x}");

const fruitForm = document.querySelector('#inputSection form')

const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')

const fetchFruitData = fruit => {
    fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
    .then(resp => resp.json())
    .then(data => addFruit(data)
    .catch(error =>{console.log(error)})    
    ) } 


    let totalCalories = 0
const addFruit = fruit => {
    const li = document.createElement('li')
    li.textContent = fruit.name;
    fruitList.appendChild(li)
    li.addEventListener('click', () => {
        fruitList.removeChild(li)
        totalCalories  =+ fruit.calories
        fruitNutrition.textContent = `Total Calories: ${totalCalories}`
    })
}


fruitForm.addEventListener('submit', e =>  {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ''

})
console.log(fruitForm)  