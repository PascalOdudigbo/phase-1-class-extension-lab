// Your code here
class Polygon{
    constructor(polygonSides){
        this.polygonSides = polygonSides;
    }

    get countSides(){
        return this.polygonSides.length;
    }
    get perimeter(){
        let perimeter = 0;
        for (const sideLength of this.polygonSides){
            perimeter += sideLength;
        }
        return perimeter;
    }
}

class Triangle extends Polygon{
    get isValid(){
    
        if (this.polygonSides[0] + this.polygonSides[1] > this.polygonSides[2] && 
            this.polygonSides[0] + this.polygonSides[2] > this.polygonSides[1] && 
            this.polygonSides[1] + this.polygonSides[2] > this.polygonSides[0]){
            return true;
        }
        else {
            return false;
        }

       
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.polygonSides[0] === this.polygonSides[1] &&
            this.polygonSides[0] === this.polygonSides[2] &&
            this.polygonSides[0] === this.polygonSides[3]){
                return true;
        }
        else {
            return false;
        }
    }

    get area(){
        return Math.pow(this.polygonSides[0], 2)
    }
}