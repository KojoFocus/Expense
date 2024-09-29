interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface expenses {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: expenses) => {
  return (
    <div className="mb-3 px-5 pt-3">
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
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
            {/* Correct usage of colSpan to span 3 columns */}
            <td colSpan={3} className="text-end">
              <strong>Total</strong>
            </td>
            <td>
              {expenses
                .reduce((total, expense) => total + expense.amount, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
