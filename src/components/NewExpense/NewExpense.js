import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDatahandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false);
    }
    const addNewExpenseHandler = () => {
        setShowForm(true);
    }

    const cancelHandler = () => {
        setShowForm(false);
    }
    return (
        <div className="new-expense">
            {!showForm && (
                <button className="add-expense-button" onClick={addNewExpenseHandler}>Add New Expense</button>
            )}
            {showForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDatahandler}
                    onCancel={cancelHandler}
                />
            )}
        </div>
    );
}

export default NewExpense