import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 100, category: "Groceries" },
    { id: 2, description: "Rent", amount: 1500, category: "Utilities" },
    { id: 3, description: "Movies", amount: 100, category: "Entertainment" },
    { id: 4, description: "Games", amount: 50, category: "Entertainment" },
    { id: 5, description: "Water Bills", amount: 20, category: "Utilities" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const handleAddExpense = (expense: { description: string; amount: number; category: string }) => {
    const newExpense = { ...expense, id: Date.now() }; // Use Date.now() for a unique ID
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      console.log("Updated Expenses:", updatedExpenses); // Log after updating state
      return updatedExpenses;
    });
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <ExpenseForm onSubmit={handleAddExpense} />
      <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      <ExpenseList onDelete={handleDelete} expenses={visibleExpenses} />
    </div>
  );
};

export default App;
