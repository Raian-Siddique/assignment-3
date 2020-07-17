// Problem 1 : feetToMile Conversion.
function feetToMile(feet) {
    if (feet < (0)) {
        return 'Come on man ! Input cannot be less than zero';
    } else {
        return (feet * 0.000189394); // 1 feet =0.000189394 mile
    }
}
// var inputFeet = "50";
// var mile = feetToMile(inputFeet);
// console.log(mile);


//*********  Problem 2: woodCalculator**************

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return 'Come on Man!!! Vaue of table chair cannot be negative.'
    } else {
        var woodForChair = chair * 1; // for each chair we need 1 wood.
        var woodForTable = table * 3; // for each table need 3 wood.
        var woodForBed = bed * 5; //for each bed need 5 wood

        var total = woodForChair + woodForTable + woodForBed;
        return total;
    }
}


// var chair = 1;
// var table = 3;
// var bed = 4;
// console.log(woodCalculator(chair, table, bed));


// ********* Problem 3: brickCalculator***********\\
function brickCalculator(floor) {
    var totalFloor;
    if (floor >= 0 && floor <= 10) {
        totalFloor = floor * 15 * 1000; // less than 10, height 15 feet, per feet 1000 bricks
    } else if (floor > 10 && floor <= 20) {
        totalFloor = (floor * 12 * 1000) + 30000; // from 11 to 20 floor, height 12 feet, per feet 1000 bricks
    } else if (floor > 20) {
        totalFloor = (floor * 10 * 1000) + 70000; // over 20, height 10 feet, per feet 1000 bricks.
    } else {
        return ('Come on Man ! Building height cannot be negative...')
    }
    return totalFloor;

}
// var floor = 22;
// var result = brickCalculator(floor);
// console.log(result);


// ***********Problem 4: tinyFriend ***********\\
function tinyFriend(array) {
    var shortLength = Infinity;
    var shortest;

    if (array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].length < shortLength) {
                shortest = array[i];
                shortLength = array[i].length;
            }
        }
    }
    return shortest;
}

// var output = (['Hati', 'dim', 'Ptoll', 'Ziraff', 'du']);
// var result = tinyFriend(output);
// console.log(result);