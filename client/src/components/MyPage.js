import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [formData, setFormData] = useState({
    a: '',
    b: '',
    c: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    axios.post('/api/index.php', formData)
      .then(response => {
        console.log(response.data.message);
        fetchTableData(); // Refresh table data after submission
      })
      .catch(error => {
        console.error(error);
      });
  };

  const fetchTableData = () => {
    axios.get('/api/index.php')
      .then(response => {
        setTableData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTableData(); // Fetch initial table data on component mount
  }, []);

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

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Integer a</th>
            <th>Integer b</th>
            <th>String c</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.a}</td>
              <td>{row.b}</td>
              <td>{row.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPage;
