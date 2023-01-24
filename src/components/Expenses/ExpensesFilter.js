import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterChangeHandler = (year) =>{
        console.log('Filter change handled by ExpensesFilter.js')
        props.onChangeFilter(year.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;