import { ChangeEvent, useState } from "react"
import CustomSelect from "./CustomSelect"
import Expense from "./Expense"

interface Props {
  expenseList: Expense[]
  categories: Option[]
  onDelete: (id: number) => void
}
const ExpenseList = ({expenseList, categories, onDelete}: Props) => {

  const [categorySelection, setCategorySelection] = useState("All");
  
  return (
    <>
      <div>ExpenseList</div>
      Filter by category
      <CustomSelect options={categories} label="Category" onSelect={(event) => setCategorySelection(event.target.value)} defaultSelection={categorySelection}/>
      <>
        <table className="table table-bordered">

            <thead>
              <tr>
                 <td className="header">Id</td>
                <td className="header">Description</td>
                <td className="header">Amount</td>
                <td className="header">Date</td>
                <td className="header">Category</td>
                <td className="header"></td>
              </tr>
            </thead>
            <tbody className="body">
              {expenseList
              .filter((expense) => !expense.deleted && categorySelection !== 'All' && categorySelection === expense.category)
              .map((expense) => <Expense key={expense.id} expense={expense} onDelete={() => onDelete(expense.id)}/>)}
            </tbody>
            <tfoot className="footer">
              <tr>
                <td className="col">Total</td>
                <td className="col"></td>
                <td className="col">${}</td>
                <td className="col"></td>
                <td className="col"></td>
                <td className="col"></td>
              </tr>
            </tfoot>
            </table>
            
    </>
     
    </>
  )
}

export default ExpenseList