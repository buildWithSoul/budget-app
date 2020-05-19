import React, {useContext} from 'react'
import {GlobalContext} from '../context/globalState'

const Balance = () => {
    const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)
    console.log(incomeTransactions)
    let totalIncome = 0
    let totalExpense = 0;

    incomeTransactions.forEach(income => {
        totalIncome = totalIncome + income.incomeAmount*1
    })
    expenseTransactions.forEach(expense => {
        totalExpense = totalExpense + expense.expenseAmount*1
    })

    return(
        <div className="balance">
            <h2> Your balance </h2>
            <h3> ${totalIncome - totalExpense} </h3> 
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p> ${totalIncome}</p>
                </div>
                <div className="minus">
                    <h3> Expenses </h3> 
                    <p> ${totalExpense} </p>
                </div>
            </div>
        </div>
    )
}

export default Balance;