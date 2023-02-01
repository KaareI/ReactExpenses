import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setShowForm(false);
    };

    const cancelHandler = () => {
        setShowForm(false);
    };

    return (
        <>
            {!showForm && (
                <button type="button" onClick={() => setShowForm(true)}>
                    Add New Expense
                </button>
            )}
            {showForm && (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input
                                type="number"
                                min="0.01"
                                step="0.01"
                                onChange={amountChangeHandler}
                                value={enteredAmount}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input
                                type="date"
                                min="2023-01-18"
                                max="2025-12-31"
                                onChange={dateChangeHandler}
                                value={enteredDate}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button type="button" onClick={cancelHandler} className="new-expense__actions">
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};

export default ExpenseForm;
