import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) =>{
    const[filteredYear, setFilteredYear]=
    useState(2023)
    console.log('Year data in Expense.js ' + filteredYear)

    const filterChangeHandler = (year) =>{
        console.log('Filter change handled by Expenses.js')
        setFilteredYear(year)
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses