import { categories } from "./consts";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="px-5">
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
{categories.map((category) => (<option key={category} value={category} > {category}</option>))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
