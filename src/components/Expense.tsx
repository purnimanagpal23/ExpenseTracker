
interface Props {
    expense: Expense
    onDelete: (id: number) => void
}

const Expense = ({expense, onDelete}: Props) => {

    const deleteExpenseItem = (id: number) => {
        onDelete(id);
    }
    
  return (
    <>
    <tr>
    <td className="col">{expense.id}</td>
        <td className="col">{expense.description}</td>
        <td className="col">{expense.amount}</td>
        <td className="col">{expense.date}</td>
        <td className="col">{expense.category}</td>
        <td className="col"><button className="btn btn-danger" onClick={() => deleteExpenseItem(expense.id)}>Delete</button></td>
    </tr>
        
    </>
  )
}

export default Expense