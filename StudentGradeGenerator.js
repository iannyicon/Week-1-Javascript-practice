function getGrade () {
    console.log("getGrade function called");
    while (true) {
        
        // Prompt the user for input
        let input = prompt ("Enter your score (0-100):");

        //Validate the input
        let score = parseFloat(input);

        if (!isNaN(score) && score >= 0 && score <= 100){ 
            //Map the score to a grade
            if (score >= 90) {
                return "A";
            } else if (score >= 80) {
                return "B";
            } else if (score >= 70){
                return "C";
            } else if (score >= 60){
                return "D";
            } else {
                return "F";
            }
        } else {
            alert("Invalid input. Please enter a numeric value between 0 and 100.");
        }
    }
     }
     
        let grade = getGrade();
        console.log("Your grade is: " + grade);
        alert("Your grade is: " + grade);
