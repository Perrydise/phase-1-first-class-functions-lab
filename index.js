// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,-2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4)
}

 function createFareMultiplier(multiplier) {
    return (fare) => {
        return multiplier * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function selectDifferentDrivers(drivers,passedInFunction){
    return passedInFunction(drivers)
}
