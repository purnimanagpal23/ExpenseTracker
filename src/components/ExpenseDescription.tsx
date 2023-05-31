import { useEffect, useState } from "react"
import CustomSelect from "./CustomSelect"
import { FieldValues, useForm } from "react-hook-form"

interface Props {
    categories: Option[],
    onSubmitExpense: (data: Expense) => void
}

const ExpenseDescription = ({categories, onSubmitExpense}: Props) => {

    const [expenseCounter, setExpenseCounter] = useState(1);

    const {register, resetField, handleSubmit} = useForm<Expense>();

    const [expense, setExpense] = useState<Expense>({
        id: 0,
        description: '',
        date: '',
        amount: 0.0,
        category: '',
        deleted: false,
        expenseFile: undefined
    });


    const onSelection = (data: string) => {
        setExpense({...expense, category: data});
    }

    const onSubmit = (data: FieldValues) => {
        
        onSubmitExpense({...expense, ...data, id: expenseCounter});

        console.log(data);
        setExpenseCounter(expenseCounter+1);
        resetField('description');
        resetField('amount'); 
        resetField('date'); 
        expense.category = '';
    }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description', {required: true, min: 1})} type="text" className="form-control" />
        </div>
        <div className="mb-3 w-25">
            <label htmlFor="date" className="form-label">Date</label>
            <input {...register('date', {required: true})} type="date" className="form-control"/>
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount', {required: true, min: 0.01, valueAsNumber: true})} type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <CustomSelect options={categories} label="Category" onSelect={onSelection} defaultSelection={expense.category} />
        </div>
        <div className="mb-3">
            <label htmlFor="Upload File" className="form-label">Attach Expense (jpg, pdf, png)</label>
            <input type="file" {...register('expenseFile', {required: true})} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
    </form>
  )
}

export default ExpenseDescription