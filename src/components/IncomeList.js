import React, {useContext} from 'react'
import {GlobalContext} from '../context/globalState'

const IncomeList = () => {
    const {incomeTransactions, deleteTransaction} = useContext(GlobalContext)

    const ListOfTransactions = incomeTransactions.map(income => 
        <li className="transaction" key={income.id}>
            <span className="transaction-text"> {income.incomeDescription} </span>
            <span className="transaction-amount"> {income.incomeAmount} </span>
            <button className="delete-btn"> 
                <i className="fas fa-trash" onClick={() => {deleteTransaction(income.id)}}></i>
            </button>
        </li>
    )

    return(
        <div className="transactions transactions-income">
            <h2> Transaction History </h2> 
            <ul className="transaction-list">
                {ListOfTransactions}
            </ul>  
        </div>
    )
}

export default IncomeList