function getStudentGrade() {
    // Prompt the user to input marks
    let marks = parseFloat(prompt("Enter the student's marks (between 0 and 100):"));

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input! Marks must be between 0 and 100.");
    } else {
        // Determine the grade based on the marks
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60 && marks <= 79) {
            grade = "B";
        } else if (marks >= 50 && marks <= 59) {
            grade = "C";
        } else if (marks >= 40 && marks <= 49) {
            grade = "D";
        } else {
            grade = "E";
        }

        // Output the grade
        console.log(`The student's grade is: ${grade}`);
    }
}

// Call the function
getStudentGrade();