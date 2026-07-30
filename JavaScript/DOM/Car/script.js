// Parent Constructor
function Car(name, model, year, color, type) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.type = type;
}

Car.prototype.start = function () {
    return "Started";
};

Car.prototype.stop = function () {
    return "Stopped";
};

// Racing
function RacingCar(name, model, year, color) {
    Car.call(this, name, model, year, color, "Racing Car");
    this.nitro = "300 km/h";
}

RacingCar.prototype = Object.create(Car.prototype);

// SUV
function SUV(name, model, year, color) {
    Car.call(this, name, model, year, color, "SUV");
    this.offRoad = "Yes";
}

SUV.prototype = Object.create(Car.prototype);

// Sedan
function Sedan(name, model, year, color) {
    Car.call(this, name, model, year, color, "Sedan");
    this.luxury = "Premium";
}

Sedan.prototype = Object.create(Car.prototype);

// DOM

const form = document.querySelector("#carForm");
const carsDiv = document.querySelector("#cars");

const cars = [];

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form[0].value;
    const model = form[1].value;
    const year = form[2].value;
    const color = form[3].value;
    const type = form[4].value;

    let car;

    if(type==="Racing Car"){
        car = new RacingCar(name,model,year,color);
    }
    else if(type==="SUV"){
        car = new SUV(name,model,year,color);
    }
    else{
        car = new Sedan(name,model,year,color);
    }

    cars.push(car);

    displayCars();

    form.reset();

});

function displayCars(){

    carsDiv.innerHTML="";

    cars.forEach(function(car){

        const div=document.createElement("div");

        div.className="card";

        div.innerHTML=`
        <h2>${car.name}</h2>

        <p><b>Model:</b> ${car.model}</p>

        <p><b>Year:</b> ${car.year}</p>

        <p><b>Color:</b> ${car.color}</p>

        <p><b>Type:</b> ${car.type}</p>

        <p><b>Start:</b> ${car.start()}</p>

        <p><b>Stop:</b> ${car.stop()}</p>

        ${
            car.type==="Racing Car"
            ? `<p><b>Nitro:</b> ${car.nitro}</p>`
            : car.type==="SUV"
            ? `<p><b>Off Road:</b> ${car.offRoad}</p>`
            : `<p><b>Luxury:</b> ${car.luxury}</p>`
        }
        `;

        carsDiv.appendChild(div);

    });

}