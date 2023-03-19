class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            this.start = true;
            console.log("engine started...!!!");
        } else {
            this.start = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        console.log("engine is off")
        this.started = false;
    }

    loadPassenger() {
        if (this.loadPassenger) {
            if(this.passenger > 0) {
                console.log(this.passenger == 0)
            } else {
                console.log(this.passenger +=1);
                this.passenger = this.passenger + 1 ;
            }
        }
    }

    scheduleService(mileage) {
        // if mileage is greater than 30000, time for maintenance equals true
        if (mileage > 30000) {
            this.maintenance = true;
        } else {
            console.log('no maintenance required')
        }

    }




    // drive() {
    //     accelerate();
    // }
    // brake() {
    //     decelerate();
    // }

    // autoPark()
    // {

    // }

    // autoDrive()
    // {
      
    // }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maxPassengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
      super(make, model, year, color, mileage);
      this.maxPassengers = maxPassengers;
      this.numberOfWheels = numberOfWheels;
      this.maximumSpeed = maximumSpeed;
      this.fuel = fuel;
      this.scheduleService = scheduleService;
      this.maintenance = true

    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle 
}
