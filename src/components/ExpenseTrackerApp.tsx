import { useEffect, useState } from "react";
import ExpenseDescription from "./ExpenseDescription"
import ExpenseList from "./ExpenseList"
import 'bootstrap/dist/css/bootstrap.css'
import { gapi } from 'gapi-script';

const ExpenseTrackerApp = () => {

  const [expenseList, setExpenseList] = useState<Expense[]>([]);
  const [total, setTotal] = useState(0);

  const categories = [
    {label: 'All', value: 'All'},
    {label: 'Grocery', value: 'Grocery'},
    {label: 'Gas', value: 'Gas'},
    {label: 'Merchandise', value: 'Merchandise'},
    {label: 'Resteraunt', value: 'Resteraunt'}
]

useEffect(() => {
  console.log(expenseList);
}, [expenseList]);

  const onSubmit = (expense: Expense) => {
    setTotal(total+expense.amount);
    setExpenseList([...expenseList, expense]);
  }

  const onDeleteExpense = (id: number) => {
    setExpenseList(expenseList.map((expense) => {
      if (expense.id === id) {
        expense.deleted = true;
        setTotal(total-expense.amount);
      }
      return expense;
    }));
  }

  return (
    <>
        <ExpenseDescription categories={categories} onSubmitExpense={onSubmit}/>
        <ExpenseList expenseList={expenseList} categories={categories} onDelete={onDeleteExpense}/>
        <p>Total: {total}</p>
    </> 
  )
}

export default ExpenseTrackerApp