<<<<<<< HEAD
=======
import './ExpenseDate.css'
>>>>>>> 7077ccc (4. Komponendi jaotamine mitmeks komponendiks + ülesanne 1)
function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()

    return (
<<<<<<< HEAD
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
=======
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
>>>>>>> 7077ccc (4. Komponendi jaotamine mitmeks komponendiks + ülesanne 1)
        </div>
    )
}

export default ExpenseDate