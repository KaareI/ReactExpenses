import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () =>{
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New jacket',
            price: 99.99
        }
    ]

    const addExpensehandler = (expense) => {
        console.log('In app.js')
        console.log(expense)
    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenseData={expenses}></Expenses>
        </div>
    );
}

export default App;
