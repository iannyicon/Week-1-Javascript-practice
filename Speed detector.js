function checkSpeed(speed) {
    const speedLimit = 70; //Speed in km/h
    const kmPerDemeritPoint = 5; // Every 5 km/h over the limit = 1 demerit point
    const maxDemeritPoint = 12 //Maximum allowed demerit points


    if (speed <= speedLimt) {
        return "Ok";
    } else {
        // Calculate demerit points
        const demeritsPoints = Math.floor ((speed - speedLimt) / kmPerDemeritPoint);

        if (demeritPoints > maxDemeritPoints) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Example Usage
const speed = parseInt(prompt("Enter the speed of the car (in km/h):")); //Get speed input
console.log(result); //Print the result
alert (result); //Show the result in an alert box