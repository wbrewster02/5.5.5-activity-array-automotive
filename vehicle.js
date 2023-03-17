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
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
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
        if (this.mileage > 30000) {
            console.log(this + 'is ready for maintenance')
        }

    }

    class Car extends Vehicle {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ', it is a ' + this.model;
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

//This exports things you want to use from this "module", more info in readme
module.exports = {
    Vehicle 
}
