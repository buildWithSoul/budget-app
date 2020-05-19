import React, {useContext} from 'react'
import {GlobalContext} from '../context/globalState'

const ExpenseList = () => {
    const {expenseTransactions, deleteTransaction} = useContext(GlobalContext)

    const ListOfTransactions = expenseTransactions.map(expense => 
        <li className="transaction" key={expense.id}>
            <span className="transaction-text"> {expense.expenseDescription} </span>
            <span className="transaction-amount"> {expense.expenseAmount} </span>
            <button className="delete-btn"> 
                <i className="fas fa-trash" onClick={() => {deleteTransaction(expense.id)}}></i>
            </button>
        </li>
    )

    return(
        <div className="transactions transactions-expense">
            <h2> Transaction History </h2> 
            <ul className="transaction-list">
                {ListOfTransactions}
            </ul>  
        </div>
    )
}

export default ExpenseList