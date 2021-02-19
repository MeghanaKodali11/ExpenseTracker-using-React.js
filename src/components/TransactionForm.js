import React from 'react';

function TransactionForm()
{
    return(
        <div>
            <h2>Add New Transaction</h2>
            <form>
                <label> Name
                <div>
                    <input type="text"></input>
                </div>
                </label>
                <label>
                    Amount
                
                <div>
                    <input type="number"></input>
                </div>
                </label>
                <br></br>
                <div>
                    <button>
                        Add Income
                    </button>
                    </div><br></br><div>
                    <button>
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
}
export default TransactionForm;