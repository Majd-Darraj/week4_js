/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

let Cars = generateCars(10);

/*--
1.1: Cars with speeds between 30 and 60
--*/
let carsSpeedLimit = Cars.filter(speed => speed.speed >= 30 && speed.speed <= 60);

console.log(carsSpeedLimit);


/*--
1.2: The makes of the cars that are not lightyellow.
--*/
// filter the lightyellow cars
let notLightyellowColor = Cars
.filter(color => color.color !== 'lightyellow')
// map the make
.map(make => make.make)
// filter the duplicated make items (https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array)
.filter((car, pos, self) => self.indexOf(car) == pos)

console.log(notLightyellowColor);


/*-- 
1.3: Lets change the cars array so it can be read by a danish person. 
--*/






obj = { name: 'Bobo' }
obj.somethingElse = obj.name
delete obj.name
















