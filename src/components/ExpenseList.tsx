

interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length === 0) {
    return <p className="text-center">No expenses to display.</p>;
  }

  return (
    <div className="mb-3 px-5 pt-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount (Ghc)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>
                {typeof expense.amount === 'number' 
                  ? expense.amount.toFixed(2) 
                  : "0.00"}
              </td> {/* Ensuring two decimal places */}
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end">
              <strong>Total</strong>
            </td>
            <td>
              <strong>
                Ghc{" "}
                {expenses
                  .reduce((total, expense) => total + (typeof expense.amount === 'number' ? expense.amount : 0), 0)
                  .toFixed(2)}
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
