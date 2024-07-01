const formElement = document.getElementById("saveTransaction");
formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    let transactionDescription=document.getElementById("transactionDescription").value;
    let transactionPrice=document.getElementById("transactionPrice").value;
    let transaction={transactionDescription:transactionDescription,transactionPrice:transactionPrice};
    let transactionJson=JSON.stringify(transaction);
    //Mandar la transaccion al backend y guardarlos ahi
    //fetch('http://localhost:3000/transactions',{
    fetch('http://public_html/jose/web/transactions',{
        method : 'Post', 
        body : transactionJson
    })
})