import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) =>{
    return(
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses