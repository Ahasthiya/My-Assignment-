type paymentMethod ="UPI" | "CreditCard" | "PayPal"
function payment(makepayment:paymentMethod){
    console.log(makepayment)
}
payment("UPI")
payment("CreditCard")