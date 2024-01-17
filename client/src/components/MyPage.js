import React, { useState } from 'react';

const MyPage = () => {
  const [formData, setFormData] = useState({
    a: '',
    b: '',
    c: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    // Add your logic for form submission here
    // For now, let's just log the form data to the console
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <form>
        <label htmlFor="a">Integer a:</label>
        <input
          type="number"
          id="a"
          name="a"
          value={formData.a}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="b">Integer b:</label>
        <input
          type="number"
          id="b"
          name="b"
          value={formData.b}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="c">String c:</label>
        <input
          type="text"
          id="c"
          name="c"
          value={formData.c}
          onChange={handleChange}
          required
        /><br />

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>

      <div id="response"></div>
    </div>
  );
};

export default MyPage;
