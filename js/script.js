// const x = require('./script2' )// will not work
 console.log('Hello World');
// console.log("the ancver is ${x}");

const fruitForm = document.querySelector('#inputSection form')

const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector('#nutritionSection p')

const fetchFruitData =  async fruit => {
    try{
        const response = await fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
        const data = await response.json()
        addFruit(data)
    }catch(err){
        console.log(err)
    }  

     } 


    let totalCalories = 0
const addFruit = fruit => {
    const li = document.createElement('li')
    li.textContent = fruit.name;
    fruitList.appendChild(li)
    totalCalories += fruit.nutritions.calories;
    fruitNutrition.textContent = `Total Calories: ${totalCalories.toFixed(2)}`
  
    li.addEventListener('click', () => {
        fruitList.removeChild(li)
        fruitNutrition.removeChild(fruitNutrition.lastChild);
    }
        
    )
}


fruitForm.addEventListener('submit', e =>  {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ''

})
console.log(fruitForm)  