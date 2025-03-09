function calculateNetSalary(grossSalary) {

    //Constants for tax rates, NHIF, and NSSF
    const TAX_RATES = [
        {min: 0, max: 24000, rate: 0.1 },
        {min: 24001, max:32333, rate: 0.25},
        {min: 32334, max: Infinity, rate : 0.3}
    ];
    const PERSONAL_RELIEF = 2400; //MONTHLY PERSONNAL RELIEF
    const NHIF_RATES = [
        {min:0, max:5999, amount: 150},
        {min:6000, max:7999, amount: 300},
        {min:8000, max:11999, amount: 400},
        {min:12000, max:14999, amount: 500},
        {min:15000, max:19999, amount: 600},
        {min:20000, max:24999, amount: 750},
        {min:25000, max:29999, amount: 850},
        {min:30000, max:34999, amount: 900},
        {min:35000, max:39999, amount: 950},
        {min:40000, max:44999, amount: 1000},
        {min:45000, max:49999, amount: 1100},
        {min:50000, max:59999, amount: 1200},
        {min:60000, max:69999, amount: 1300},
        {min:70000, max:79999, amount: 1400},
        {min:80000, max:89999, amount: 1500},
        {min:90000, max:99999, amount: 1600},
        {min:10000, max:Infinity, amount: 1700},
    ];

    const NSSF_RATE = 0.06; // 6% of gross salary (Tier I contribution)

    // Calculate PAYE (Tax)
    let tax = 0;
    for (const rate of TAX_RATES) {
        if (grossSalary > rate.min) {
            const taxableAmount = Math.min(grossSalary, rate.max)
            -rate.min;
            tax += taxableAmount * rate.rate;
        }
    }
    
    tax -= PERSONAL_RELIEF; //Apply personal relief
    if (tax < 0) tax = 0; //Ensure tax is not negative

    //Calculate NHIF
    let nhif = 0;
    for (const rate of NHIF_RATES){
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            nhif = rate.amount;
            break;
        }
    }

    //Calculate NSSF 
    const nssf = grossSalary * NSSF_RATE;

    //Calculate Net Salary
    const netSalary =grossSalary - tax - nhif - nssf;

    return {
        grossSalary: grossSalary,
        tax: tax,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

const grossSalary = 50000; //Replace with the actual gross salary
const result = calculateNetSalary(grossSalary);

console.log("Gross Salary:", result.grossSalary);
console.log("PAYE Tax:", result.tax);
console.log("NHIF Deduction:", result.nhif);
console.log("NSSF Deduction:", result.nssf);
console.log("Net Salary:", result.netSalary)