"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TodoForm = ({ addTodo }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await addTodo(formData);
      if (response?.data) {
        setSuccessMessage("Todo added successfully!");
        router.refresh();
      } else {
        setError("Failed to add Todo. Please try again.");
      }
    } catch (error) {
      console.error("Error adding Todo:", error);
      setError("Failed to add Todo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      TodoForm
      <form
        onSubmit={handleAdd}
        className="max-w-screen-md mx-auto p-2 flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 bg-transparent border"
          id=""
        />
        <input
          type="text"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="p-4 bg-transparent border"
          id=""
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <button
          type="submit"
          disabled={loading}
          className="border border-red-300 p-2"
        >
          add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
