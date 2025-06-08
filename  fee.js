function estimateTransactionFee(amountTosend) {
    let fee = amountTosend * 0.05; 
    if (fee < 10) {
        fee = 10; 
    }else if (fee > 70) {
        fee = 70; 
    }
    consoletotal= 'amountTosent+ fee';
    console.log('sending KES ${amountTosent};');
    console.log('calculateTransaction fee: KES ${fee}');
    console.log('Total amount to be deducted : KES ${total}');

}
const input = prompt("unatuma Ngapi?(KES):");
const amount=number(userinput);
estimateTransactionFee(amount);