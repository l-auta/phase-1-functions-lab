// Code your solution in this file!
function distanceFromHqInBlocks (pickupLocation){
    let scuberHq = 42
    let distance = pickupLocation - scuberHq
    if (pickupLocation < 42){
        distance = -pickupLocation + scuberHq
    }
    return distance
};
//console.log (distanceFromHqInBlocks(30))

function distanceFromHqInFeet(){
    const distanceBlocks = distanceFromHqInBlocks(50);
    let blockToFeet = 1 * 264
    let distanceFeet = distanceBlocks * 264
    return distanceFeet
};
//console.log (distanceFromHqInFeet())

function distanceTravelledInFeet(startPoint, stopPoint){
    let distBlock = stopPoint - startPoint;
    if(startPoint > stopPoint){
        distBlock = -stopPoint + startPoint
    };
    let distFeet = distBlock * 264
    return distFeet;
};
//console.log (distanceTravelledInFeet(60, 50));

function calculatesFarePrice(start, destination){
    distInFeet = (destination-start)*264
    if(start > destination){
        distInFeet = (-destination + start)*264
    };
    if(distInFeet <=400){
        fare = 'Free sample'
    }
    else if(distInFeet >400 && distInFeet <=2000){
        fare =(distInFeet-400)*0.02
    }
    else if(distInFeet > 2000 && distInFeet <= 2500){
        fare = 25
    }
    else{
        fare = 'cannot travel that far'
    }

    return fare
};
//console.log(calculatesFarePrice(3, 2))