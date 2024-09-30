import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Initialize the list of expenses with some sample data
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "groceries" },
    { id: 2, description: "Rent", amount: 1500, category: "rent" },
    { id: 3, description: "Gas", amount: 100, category: "gas" },
    {
      id: 4,
      description: "Entertainment",
      amount: 50,
      category: "entertainment",
    },
    { id: 5, description: "Utilities", amount: 20, category: "utilities" },
  ]);

  // Handle deleting an expense by its id
  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // Filter the expenses based on the selected category (if any) and return the filtered list of expenses
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <div>
      <ExpenseForm />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        onDelete={handleDelete} // Pass the delete handler function
        expenses={visibleExpenses} // Pass the current list of expenses
      />
    </div>
  );
};

export default App;
