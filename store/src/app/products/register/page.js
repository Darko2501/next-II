'use client'
import { useState } from "react";

export default function Register() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState('');

    const createProduct = async (event) => {
        event.preventDefault();  // Prevent the default form submission behavior

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description
            })
        });

        if (response.ok) {
            console.log('Product added successfully');
        } else {
            console.log('Failed to add product');
        }
    };

    return (
        <>
            <form onSubmit={createProduct}>
                <input
                    type="text"
                    placeholder="Name of product"
                    onChange={e => setTitle(e.currentTarget.value)}
                /><br />
                <input
                    type="number"
                    placeholder="Price of product"
                    onChange={e => setPrice(e.currentTarget.value)}
                /><br />
                <input
                    type="text"
                    placeholder="Description of product"
                    onChange={e => setDescription(e.currentTarget.value)}
                /><br />
                <button type="submit">ADD PRODUCT</button>
            </form>
        </>
    );
}
