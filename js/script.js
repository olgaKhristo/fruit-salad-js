const fruitForm = document.querySelector('#inputSection form')
const fruitList = document.querySelector('#fruitSection ul')
const fruitNutrition = document.querySelector("#nutritionSection p")
const pictures = document.querySelector("#picSection")
const tol = document.querySelectorAll(".tol")
const fetchFruitData =  async fruit => {
    //api function
    try{
        const resp = await fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`) //get to this site
        const data = await resp.json()
        console.log(data)
        addFruit(data)
    }catch(err){
        console.error(err)
    }
}
const removeFruit = item => {
    item.target.remove()
}
let totals = [0,0,0,0,0]
const getPicture = async fruit => {
    try{
        const resp = await fetch(`https://pixabay.com/api/?q=${fruit}+fruit&key=39374506-d64346e0b852363aaafc4a948`)
        const data = await resp.json()
        displayPic(data)
    }catch(err){
        console.error(err)
    }
}
const displayPic = data =>{
    const pic = document.createElement("img")
    pic.src = data.hits[0].webformatURL
    pictures.appendChild(pic)
}
const addFruit = fruit => {
    const li = document.createElement("li")
    li.textContent = fruit.name
    //li.addEventListener("click", removeFruit, {once: true})
    li.addEventListener('click', () => {
               fruitList.removeChild(li)
                fruitNutrition.removeChild(fruitNutrition.lastChild);
         })
         
    getPicture(fruit.name)
    fruitList.appendChild(li)
    totals[0] += fruit.nutritions.calories
    totals[1] += fruit.nutritions.carbohydrates
    totals[2] += fruit.nutritions.protein
    totals[3] += fruit.nutritions.fat 
    totals[4] += fruit.nutritions.sugar 
    totals.forEach((value, index) => tol[index].textContent = value.toFixed(2))
    // fruitNutrition.textContent = `Calories ${totals[0]} carbs ${totals[1]} proteins ${totals[2]} fats ${totals[3]} sugars ${totals[4]}`
}


fruitForm.addEventListener("submit", e => {
    e.preventDefault()
    fetchFruitData(e.target.fruitInput.value)
    e.target.fruitInput.value = ""
})
console.log("fruitForm")





















// // const x = require('./script2' )// will not work
//  console.log('Hello World');
// // console.log("the answer is ${x}");

// const fruitForm = document.querySelector('#inputSection form')

// const fruitList = document.querySelector('#fruitSection ul')
// const fruitNutrition = document.querySelector('#nutritionSection p')
// const pictures = document.querySelector('#picSection')

// const getPic = async fruit => {
// try{
//     const response = await fetch(`https://pixabay.com/api/?q=${fruit}+fruit&key=39374506-d64346e0b852363aaafc4a948`)
//     const data = await response.json()
//     displayPic(data)

// }catch(err){
//     console.error(err)
// }
// } 

// const fetchFruitData =  async fruit => {
//     try{
//         const response = await fetch(`https://fruity-api.onrender.com/api/fruits/${fruit}`)
//         const data = await response.json()
//         addFruit(data)
//     }catch(err){
//         console.log(err)
//     }  

//      } 

//      const displayPic = data => {
//         const pic = document.createElement('img')
//         pic.src = data.hits[0].webformatURL
//         pictures.appendChild(pic)
//      }



//     let totalCalories = 0

// const addFruit = fruit => {
//     const li = document.createElement('li')
//     li.textContent = fruit.name;

//     Calories += fruit.nutritions.calories;
//     fruitNutrition.textContent = `Total Calories: ${totalCalories.toFixed(2)}`
//     getPic(fruit.name)
//     fruitList.appendChild(li)
//     li.addEventListener('click', () => {
//         fruitList.removeChild(li)
//         fruitNutrition.removeChild(fruitNutrition.lastChild);
//     }
        
//     )
// }


// fruitForm.addEventListener('submit', e =>  {
//     e.preventDefault()
//     fetchFruitData(e.target.fruitInput.value)
//     e.target.fruitInput.value = ''

// })
// console.log(fruitForm)