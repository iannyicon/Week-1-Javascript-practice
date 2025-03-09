function calculateNetSalary() {
    // Input: Basic Salary and Benefits
    const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    const benefits = parseFloat(prompt("Enter Benefits:"));

    // Validate inputs
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Invalid input! Please enter positive numbers.");
        return;
    }

    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Calculate Payee (Tax) based on KRA rates
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        payee = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    }

    // Calculate NHIF Deductions based on NHIF rates
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculate NSSF Deductions based on NSSF rates (2023)
    const nssfRate = 0.06; // 6% of pensionable earnings
    const nssfTierI = 6000; // Tier I limit
    const nssfTierII = 18000; // Tier II limit
    let nssf = 0;
    if (grossSalary <= nssfTierI) {
        nssf = grossSalary * nssfRate;
    } else if (grossSalary <= nssfTierII) {
        nssf = nssfTierI * nssfRate + (grossSalary - nssfTierI) * nssfRate;
    } else {
        nssf = nssfTierI * nssfRate + (nssfTierII - nssfTierI) * nssfRate;
    }

    // Calculate Net Salary
    const netSalary = grossSalary - (payee + nhif + nssf);

    // Output the results
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Payee (Tax): ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhif.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssf.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Call the function
calculateNetSalary();