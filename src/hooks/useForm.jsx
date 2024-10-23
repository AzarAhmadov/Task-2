import { useState } from "react";

const useForm = (initialValue) => {
  const [formData, setFormData] = useState(initialValue);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData(initialValue);
  };

  return { formData, setFormData, handleInput, resetForm };
};

export default useForm;
