// class Car {
//     constructor(model){
//         this.model = model;
//         this.gasTank = 100;
//         this.zapravka = []

//     }


//     getGas(){
//         this.gasTank += 10;
//         const stamp = Date.now();
//         const time = new Date(stamp);
//         this.zapravka.push(time.toString());
//         return this.gasTank;
//     }
//     drive(){
//         this.gasTank -= 10;
//         return this.gasTank;
//     }
// }
// const tesla = new Car('Tesla')
// const audi = new Car('Audi')

// console.log(tesla)
// console.log(audi)

// var twoSum = function(nums, target) {
//     const result = []
    
//     for(let i = 0; i < nums.length;i++){
//         for(let j = i + 1; j < nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 result.push(i)
//                 result.push(j)
//             }
//         }
//     }

//     return result
// };

// console.log(twoSum([2,7,11,15],13))






const form = document.querySelector('form')
const stat = document.querySelector('.stat')


const inputCity = document.querySelector('.city-input')
const inputPopul = document.querySelector('.popul-input')

const main = document.querySelector('.main')


const startGame = document.querySelector('.btnStartGame')
const btnExit = document.querySelector('.exit')
const btnExitResult = document.querySelector('.exit-result')

const header = document.querySelector('header')
const resultDiv = document.querySelector('.result-div')

startGame.onclick = ()=>{
    main.style.marginLeft = 0

    header.style.display = 'none'
    console.log('click')
}

btnExitResult.onclick = ()=>{
    resultDiv.style.marginTop = '200vh'
    btnExitResult.style.display = 'none'
}

btnExit.onclick = () =>{
    header.style.display = 'flex'
    main.style.marginLeft = '250%'
}
const optionBomb = document.querySelector('.option-bomb')
const optionCity = document.querySelector('.option-city')



class City{
    constructor(nameCity,population){
        this.nameCity = nameCity;
        this.population = population
    }



    atomicBomb(){
        const resultTitle = document.querySelector('.result-title')


        let onePopulation
        let twoPopulation 
        let nameBomb


        if(optionCity.value == 'Moskov'){
            this.population = 13097539
            this.nameCity = 'Москва'
            console.log(this.nameCity,this.population)
            if(optionBomb.value == 'bomb1'){
                console.log('bum1')
                nameBomb = '«Малюк»'
                onePopulation =  Math.round(this.population * 0.73)
                twoPopulation = this.population - Math.round(this.population * 0.73)
            }
            if(optionBomb.value == 'bomb2'){
                console.log('bum2')
                nameBomb = '«Товстун»'
                onePopulation =  Math.round(this.population * 0.65)
                twoPopulation = this.population - Math.round(this.population * 0.65)
            }
            if(optionBomb.value == 'bomb3'){
                console.log('bum3')
                nameBomb = '«Mk.18»'
                onePopulation =  Math.round(this.population * 0.21)
                twoPopulation = this.population - Math.round(this.population * 0.21)
            }
            if(optionBomb.value == 'bomb4'){
                console.log('bum4')
                nameBomb = '«B83»'
                onePopulation =  Math.round(this.population * 0.11)
                twoPopulation = this.population - Math.round(this.population * 0.11)
            }
            if(optionBomb.value == 'bomb5'){
                console.log('bum5')
                nameBomb = '«Цар-бомба»'
                onePopulation =  Math.round(this.population * 0.003)
                twoPopulation = this.population - Math.round(this.population * 0.003)
            }
        }

        if(optionCity.value == 'Berlin'){
            this.population = 3326002
            this.nameCity = 'Берлін'
            console.log(this.nameCity,this.population)
            if(optionBomb.value == 'bomb1'){
                console.log('bum1')
                nameBomb = '«Малюк»'
                onePopulation =  Math.round(this.population * 0.73)
                twoPopulation = this.population - Math.round(this.population * 0.73)
            }
            if(optionBomb.value == 'bomb2'){
                console.log('bum2')
                nameBomb = '«Товстун»'
                onePopulation =  Math.round(this.population * 0.65)
                twoPopulation = this.population - Math.round(this.population * 0.65)
            }
            if(optionBomb.value == 'bomb3'){
                console.log('bum3')
                nameBomb = '«Mk.18»'
                onePopulation =  Math.round(this.population * 0.21)
                twoPopulation = this.population - Math.round(this.population * 0.21)
            }
            if(optionBomb.value == 'bomb4'){
                console.log('bum4')
                nameBomb = '«B83»'
                onePopulation =  Math.round(this.population * 0.11)
                twoPopulation = this.population - Math.round(this.population * 0.11)
            }
            if(optionBomb.value == 'bomb5'){
                console.log('bum5')
                nameBomb = '«Цар-бомба»'
                onePopulation =  Math.round(this.population * 0.003)
                twoPopulation = this.population - Math.round(this.population * 0.003)
            }
        }
        

        const html = `<p class="result10">
<p>Ви скинули ${nameBomb} бомбу на ${this.nameCity}. </p>
<p>кількість населення до трагедіїї: ${this.population} </p>
<p>населення після трагедіїї: ${onePopulation}. </p>
<p>кількість загиблих: ${twoPopulation} </p>
</p>`
        resultTitle.insertAdjacentHTML('beforeend', html)
    }}



     
     

form.onsubmit = function(e){
    e.preventDefault();

    const result = document.querySelector('.result-title')

    if(result){
        result.textContent = ''
        console.log('remove')
    }
    resultDiv.style.animation = 'bombFinish 4.5s linear'
    if(resultDiv.style.animation){
        console.log('re')
        setTimeout(() => {
            resultDiv.style.animation = ''
            console.log('re2')

            
            const citi = new City();

            citi.atomicBomb()
        }, 4500);
    }


    resultDiv.style.marginTop = '0%'
    resultDiv.style.zIndex = 100


  
    btnExitResult.style.display = 'block'

}

const reset = document.querySelector('.reset')

reset.onclick = () =>{
    console.log('click')

    optionCity.value = 'Moskov'
    optionBomb.value = 'bomb1'
}

