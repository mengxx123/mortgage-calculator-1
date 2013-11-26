define(['underscore'], function (_) {
return {	defaults:{
   investmentValue:200000,
   downpayPercent:10,
   interestRate:10,
   downpay:20000,
   amortization:25,
   paymentWeekly: false,
   paymentBiWeekly: false,
   paymentMonthly: true,
   downpaySelected:true,
   propertyTax:5000,
   closingCosts:5000,
   maintenanceFee:500,
   compound:'Bi-Annually',
   freq:'monthly',
   payoff:'Pay Full Term'
   },
}
})