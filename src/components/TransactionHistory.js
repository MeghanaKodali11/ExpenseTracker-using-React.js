import React from 'react'; 

function TransactionHistory({ transactions }){
    return(
        <div>
            <h2> Transcation History</h2>
            <ul>{
                transactions.map((data) => <li key={data.uniqueId}> {data.name} ${data.amount}</li>)
                }
            </ul>
        </div>
    )
}
export default TransactionHistory;