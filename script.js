function discount(total){
    if( total>=100){
        return total*10/100
    }
    return 0

}

function deduction(amt){
    return amt*5/100
}

let count = Number(prompt("enter the number"))
let price = 0
for(let i =1; i<=count; i++){

    let p1 = Number(prompt(`enter price of item ${i}`))

    price+=p1;
}

let dis1 = discount(price)

let priceafterDis = price-dis1

 let tax = deduction(priceafterDis)

 let finalAmount = priceafterDis+tax

 console.log(`total base price$${price}`)
 console.log(`dicount applied$${dis1}`)
 console.log(`price after discount$${priceafterDis}`)
 console.log(`tax 5%$${tax}`)
 console.log(`final payable amount$${finalAmount}`)

 alert(`Billing Complete! Final Payable Amount${finalAmount}`)