import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] =
        useState(2023)
    console.log('Year data in Expense.js ' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Expenses.js')
        console.log(year + ' in Expenses.js')
        setFilteredYear(year)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {
                props.expenses.map((expense) => {
                return<ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.price}
                date={expense.date}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses