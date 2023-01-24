import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2023, 0, 10),
        title: 'New book',
        price: 30.99
    },
    {
        id: 'e2',
        date: new Date(2023, 0, 10),
        title: 'New jacket',
        price: 99.99
    }
]
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpensehandler = (expense) => {
        console.log('In app.js')
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }
    console.log(expenses)

return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
);
}

export default App;
