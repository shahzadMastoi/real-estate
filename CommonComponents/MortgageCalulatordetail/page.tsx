interface MortgageDetails {
    Month: number;
    Interest: string;
    Principal: string;
    RemainingBalance: string;
  }
  
  function calculateMortgageDetails(
    price: number,
    downPayment: number,
    interestRate: number,
    mortgageTerm: number,
    PMI: number
  ): MortgageDetails[] {
    let loanAmount: number = price - downPayment;
    let monthlyInterest: number = interestRate / 100 / 12;
    const output: MortgageDetails[] = [];
    console.log(loanAmount,'loan amount');
    console.log(monthlyInterest,'monthlyinterest');
    
    
    const totalMonths: number = mortgageTerm * 12;
  
    if (PMI > 0) {
      monthlyInterest += PMI / 100 / 12; // Convert PMI to monthly
    }
  
    for (let i = 1; i <= totalMonths; i++) {
      const interestPayment: number = loanAmount * monthlyInterest;
      console.log(interestPayment,'interestpayment');
      
      const totalPayment: number =
        loanAmount *
        (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
        (Math.pow(1 + monthlyInterest, totalMonths) - 1);
        console.log(totalPayment,'totalpaymnt');
        
      const principalPayment: number = totalPayment - interestPayment;
  console.log(principalPayment,'principalpayment');
  

      output.push({
        Month: i,
        Interest: interestPayment.toFixed(2),
        Principal: principalPayment.toFixed(2),
        RemainingBalance: loanAmount.toFixed(2),
      });
  
      loanAmount -= principalPayment;
    }
  
    return output;
  }
  
  export default calculateMortgageDetails;
  