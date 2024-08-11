// components/BillDetails.js
import React, { useState } from 'react';

const BillDetails = ({ onAddItem }) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if (!item.trim()) {
            setErrorMessage('Please input data in the Item section.');
            return;
        }

        // Check if the item contains only alphabetical characters
        if (!/^[a-zA-Z\s]+$/.test(item)) {
            setErrorMessage('Item should only contain alphabetical characters.');
            return;
        }

        const newItem = { item, quantity, price };
        onAddItem(newItem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('');
    };

    return (
        <div>
            <label>Item:</label>
            <input 
                type="text" 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
            />
            <label>Quantity:</label>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))} 
            />
            <label>Price:</label>
            <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
            />
            <button onClick={handleAddItem}>
                Add Item
            </button>
            <p style={{ color: 'red' }}>{errorMessage}</p>
        </div>
    );
};

export default BillDetails;
