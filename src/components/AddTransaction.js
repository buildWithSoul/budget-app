import React, {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import {GlobalContext} from '../context/globalState'

const AddTransaction = () => {
    const {addIncome, addExpense} = useContext(GlobalContext)

    const [income, setIncome] = useState({
        incomeDescription: '',
        incomeAmount: 0
    });

    const onChangeIncome = e => {
        setIncome({...income, [e.target.name]:e.target.value})
    }

    const onSubmitIncome = e => {
        e.preventDefault();
        const newIncomeTransaction = {
            id: uuidv4(),
            incomeDescription: income.incomeDescription,
            incomeAmount: income.incomeAmount * 1
        }

        addIncome(newIncomeTransaction)
        setIncome({ incomeDescription: '', incomeAmount: 0})
    }

    const [expense, setExpense] = useState({
        expenseDescription: '',
        expenseAmount: 0
    });

    const onChangeExpense = e => {
        setExpense({...expense, [e.target.name]:e.target.value})
    }

    const onSubmitExpense = e => {
        e.preventDefault();
        const newExpenseTransaction = {
            id: uuidv4(),
            expenseDescription: expense.expenseDescription,
            expenseAmount: expense.expenseAmount * 1
        }

        addExpense(newExpenseTransaction)
        setExpense({ expenseDescription: '', expenseAmount: 0})

    }

    return(
        <div className="form-wrapper">
            <form onSubmit={onSubmitIncome}>
                <div className="input-group income">
                    <input name="incomeDescription" type="text" placeholder="Add Income.." autoComplete="off" onChange={onChangeIncome}/>
                    <input name="incomeAmount" type="number" placeholder="Amount" autoComplete="off" onChange={onChangeIncome}/>
                    <input type="submit" value="Log"/>
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className="input-group expense">
                    <input name="expenseDescription" type="text" placeholder="Add Expense.." autoComplete="off" onChange={onChangeExpense} />
                    <input name="expenseAmount" type="number" placeholder="Amount" autoComplete="off" onChange={onChangeExpense}/>
                    <input type="submit" value="Log"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction