import React from "react";
import { useForm } from "react-hook-form";

const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="border rounded p-2 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default ExampleForm;
