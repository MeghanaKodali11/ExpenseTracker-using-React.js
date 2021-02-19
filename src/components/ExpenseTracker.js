import React from 'react'; 
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';

import {uniqueId} from '../utils';
//Aggregator Component/ container component

const transactionData = [
    { id: uniqueId(), name: 'salary', amount:'3000', type: 'income'},
    { id: uniqueId(), name: 'shopping', amount:'300', type: 'expense'}
];
function ExpenseTracker(){
    return(
    <div>
        <h1>Expense Tracker</h1>
        <Expense income ={30000} expense={300} />
        <TransactionHistory transactions = {transactionData}/>
        <TransactionForm/>
    </div>)
}

export default ExpenseTracker;