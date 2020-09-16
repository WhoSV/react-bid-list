import React, { useState, useEffect } from 'react';

// Import reusable components
import ListView from './components/list-view';
import Button from './components/button';
import Input from './components/input';

import { getBids } from './actions/bids.js';

import './App.css';

function App() {
  const [bids, setBids] = useState([]);
  const [userBid, setUserBids] = useState('');
  const [actionButtonsState, setActionButtonsState] = useState(false);

  // Get data from provided link
  useEffect(() => {
    getBids((data) => {
      setBids(data.data.bids.data);
    });
  }, []);

  function handleRetract() {
    setBids(bids.slice(0, -1));
    setActionButtonsState(false);
  }

  function handleUpdate() {
    // Find user bid index by User id
    const userBidIndex = bids.findIndex((elem) => elem.id === 1231231231);

    // Update user bid
    bids[userBidIndex].amount = userBid;

    // Update bid list
    setBids([...bids]);
  }

  function handlePlaceBid() {
    // Stop execute if user bid is empty
    if (!userBid) {
      return;
    }

    let newBid = {
      id: 1231231231, // User ID
      amount: userBid,
      driver: {
        first_name: 'You',
      },
    };

    // Update bid list and add user bid at the end
    setBids([...bids, newBid]);

    setActionButtonsState(true);
  }

  function handleChange(inputValue) {
    setUserBids(inputValue);
  }

  return (
    <div className="app">
      <div className="container">
        <p className="text">Existing bids:</p>

        <ListView bids={bids} />

        <p className="text">Your bid:</p>

        <div className="actions">
          <Input type="number" onChange={handleChange} />

          {actionButtonsState ? (
            <div className="action-buttons">
              <Button name="UPDATE" btnClick={handleUpdate} colorType="warning" />
              <Button name="RETRACT" btnClick={handleRetract} colorType="danger" />
            </div>
          ) : (
            <div className="action-buttons">
              <Button name="PLACE BID" btnClick={handlePlaceBid} colorType="success" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
