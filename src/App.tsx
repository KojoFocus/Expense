import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "groceries" },
    { id: 2, description: "Rent", amount: 1500, category: "rent" },
    { id: 3, description: "Gas", amount: 100, category: "gas" },
    { id: 4, description: "Entertainment", amount: 50, category: "entertainment" },
    { id: 5, description: "Utilities", amount: 20, category: "utilities" },
  ]);

  // Handle deleting an expense by its id
  const handleDelete = (id: number) => {
    console.log("Deleting expense with id:", id);
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseForm />
      <ExpenseList 
        onDelete={handleDelete}  // Pass the delete handler function
        expenses={expenses}      // Pass the current list of expenses
      />
    </div>
  );
};

export default App;
