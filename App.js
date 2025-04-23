import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    event: 'Coding Bootcamp'
  });
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicate email
    const isDuplicate = users.some(user => user.email === formData.email);
    if (isDuplicate) {
      setMessage('This email is already registered!');
      return;
    }

    const updatedUsers = [...users, formData];
    setUsers(updatedUsers);
    console.log(updatedUsers);
    setMessage('Registration successful!');

    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      event: 'Coding Bootcamp'
    });

    setTimeout(() => setMessage(''), 3000);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      age: '',
      event: 'Coding Bootcamp'
    });
    setMessage('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register for an Event</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={formData.age} onChange={handleChange} min="1" required />

        <label htmlFor="event">Select Event</label>
        <select id="event" value={formData.event} onChange={handleChange}>
          <option value="Coding Bootcamp">Coding Bootcamp</option>
          <option value="Art Workshop">Art Workshop</option>
          <option value="Robotics Seminar">Robotics Seminar</option>
          <option value="Music Night">Music Night</option>
        </select>

        <div className="buttons">
          <button type="submit">Register</button>
          <button type="button" onClick={handleClear} id="clearBtn">Clear</button>
        </div>

        <p className="message">{message}</p>
      </form>

      <div className="user-list">
        <h3>Registered Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} ({user.email}) - {user.event}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
