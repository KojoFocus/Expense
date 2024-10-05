import { useForm } from "react-hook-form";
import { categories } from "./consts";

interface Props {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  description: string;
  amount: number;
  category: string;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

      const handleFormSubmit = (data: FormData) => {
        const parsedData: FormData = {
          ...data,
          amount: parseFloat(data.amount.toString()), // Ensure the amount is a number
        };
        console.log("Form Data Submitted:", parsedData); // Debugging line
        onSubmit(parsedData);
      };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3 px-5 pt-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          {...register("description", { required: true })}
        />
        {errors.description && <p className="text-danger">Description is required</p>}
      </div>

      <div className="mb-3 px-5">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          {...register("amount", { required: true })}
        />
        {errors.amount && <p className="text-danger">Amount is required</p>}
      </div>

      <div className="mb-3 px-5">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="category"
          {...register("category", { required: true })}
        >
          <option value="" disabled>Choose a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">Category is required</p>}
      </div>

      <div className="px-5 py-3">
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
