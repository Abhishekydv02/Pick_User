import React, { useState } from 'react';
import './ChipComponent.css'; 

const ChipComponent = () => {
  const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', photo: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Eva White', email: 'eva@example.com', photo: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { id: 7, name: 'Frank Miller', email: 'frank@example.com', photo: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Grace Wilson', email: 'grace@example.com', photo: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { id: 9, name: 'Henry Garcia', email: 'henry@example.com', photo: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Ivy Robinson', email: 'ivy@example.com', photo: 'https://randomuser.me/api/portraits/men/10.jpg' },
    // Add more users as needed
  ];

  const [users, setUsers] = useState(initialUsers);
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsListVisible(true);
  };

  const handleUserClick = (user) => {
    setChips([...chips, user]);
    setUsers(users.filter((u) => u.id !== user.id));
    setInputValue('');
    setIsListVisible(false);
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c.id !== chip.id));
    setUsers([...users, chip]);
  };

  return (
    <div className="chip-container">
      <div className="chips">
        {chips.map((chip) => (
          <div key={chip.id} className="chip">
            <img src={chip.photo} alt={chip.name} className="chip-photo" />
            <div>
              <span>{chip.name}</span>
            </div>
            <span onClick={() => handleChipRemove(chip)}>X</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsListVisible(true)}
        placeholder="Add new user..."
        className="input-field"
      />
      {isListVisible && (
        <div className="user-list-container">
          <ul className="user-list">
            {users
              .filter((user) => user.name.toLowerCase().includes(inputValue.toLowerCase()))
              .map((user) => (
                <li key={user.id} onClick={() => handleUserClick(user)}>
                  <div className="user-info">
                    <img src={user.photo} alt={user.name} className="user-photo" />
                    <span className="user-name">{user.name}</span>
                  </div>
                  <span className="user-email">{user.email}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChipComponent;
