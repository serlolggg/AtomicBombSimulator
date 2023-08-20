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

class City{
    constructor(nameCity,population){
        this.nameCity = nameCity;
        this.population = population
    }

    atomicBomb(){

        const html = `<p class="result">
Ви скинули атомну бомбу на ${this.nameCity}.
кількість населення до бомби: ${this.population}
населення після бомби: ${Math.round(this.population * 0.023)}.
кількість загиблих: ${this.population - Math.round(this.population * 0.023)}
</p>`


        stat.insertAdjacentHTML('beforeend', html)

        console.log(`
Ви скинули атомну бомбу на ${this.nameCity}.
кількість населення до бомби: ${this.population}
населення після бомби: ${Math.round(this.population * 0.023)}.
кількість загиблих: ${this.population - Math.round(this.population * 0.023)}`)
    }

}

form.onsubmit = function(e){
    const result = document.querySelector('.result')


    if(result){
        result.remove()
    }

    e.preventDefault();

    console.log(inputCity.value, inputPopul.value)
    const moscow = new City(inputCity.value, inputPopul.value)
    console.log(moscow.atomicBomb())

}
