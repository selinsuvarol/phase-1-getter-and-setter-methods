// Add your Circle class here
const pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    get diameter() {
        return this.radius * 2;
    }

    get area() {
        return pi * (this.radius * this.radius);
    }

    get circumference() {
        return (2 * pi * this.radius);
    }
    
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set area(area) {
        this.radius = Math.sqrt(area / pi);
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * pi);
    }

}
