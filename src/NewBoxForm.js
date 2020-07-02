import React from "react";
import { useState } from "react";

function NewBoxForm({ addBox }) {
  const initialFormState = { color: "", width: 0, height: 0 };
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialFormState);
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData( oldData => ({
      ...oldData, [name]:value
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width (in px):</label>
      <input
        id="width"
        name="width"
        type="number"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height (in px):</label>
      <input
        id="height"
        name="height"
        type="number"
        value={formData.height}
        onChange={handleChange}
      />
      <button>Add box</button>
    </form>
  );
}

export default NewBoxForm;
