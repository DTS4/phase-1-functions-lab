// Code your solution in this file!

// function distanceFromHqInBlocks() {
//     if (distanceFromHqInBlocks = 43) {
//     } return 1 

// }

// function distanceFromHqInFeet() {
//     if (distanceFromHqInFeet = 50) {
//     } return 8

// }

// function distanceFromHqInBlocks(someValue){
//   return distanceFromHqInBlocks()

// }

// distanceFromHqInBlocks(43)

function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42
    return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264

}

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }

}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination); {
        if (distance <= 400) {
            return 0
        }
    }
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    }else if (distance >= 2000 && distance <=2500) {
        return 25
    } else if (distance > 2500) {
        return `cannot travel that far`
    }

}

 
