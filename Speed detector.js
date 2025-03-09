function checkSpeed() {
    // Prompt the user to input the speed
    let speed = parseFloat(prompt("Enter the speed of the car (in km/s):"));

    // Define the speed limit and demerit point threshold
    const speedLimit = 70;
    const demeritPointsPerIncrement = 1;
    const increment = 5;
    const maxDemeritPoints = 12;

    // Validate the input
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input! Speed must be a positive number.");
    } else {
        // Check if the speed is within the limit
        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            // Calculate demerit points
            const points = Math.floor((speed - speedLimit) / increment) * demeritPointsPerIncrement;

            // Check if the license should be suspended
            if (points > maxDemeritPoints) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }
    }
}

// Call the function
checkSpeed();