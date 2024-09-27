import { useForm } from "react-hook-form";

// Interface names should start with uppercase by convention
interface FormData { 
  description: string;
  amount: number;
  category: string;
}

const ExpenseForm = () => {
  // UseForm should have FormData as the type
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Type for onSubmit should be FormData, not FieldValues
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <select className="form-select" aria-label="Default select example" {...register("category", { required: true })}>
          <option value="" selected disabled>Choose a category</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
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
