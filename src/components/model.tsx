interface Expense {
    id: number,
    description: string,
    date: string,
    amount: number,
    category?: string,
    deleted?: boolean,
    expenseFile?: File
}

interface Option {
    label: string,
    value: string
}