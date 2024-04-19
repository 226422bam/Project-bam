import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext(null);
export const OrderContextProvider = (props) => {
    const [shoes, setShoes] = useState([]);
    const [itemCart, setItemCart] = useState([]);
    const [totalItemsInCart, setTotalItemsInCart] = useState(0);

    // Function to initialize the default cart
    const defaultCart = () => {
        let cart = {};
        for (let i = 1; i < shoes.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };

    useEffect(() => {
        const fetchShoes = async () => {
            try {
                const response = await axios.get('http://localhost:8008/shoes');
                setShoes(response.data);
            } catch (error) {
                console.error('Error fetching shoes:', error);
            }
        };

        fetchShoes();
    }, []);

    useEffect(() => {
        // Calculate the total number of items in the cart whenever there's a change in itemCart
        let totalItems = 0;
        for (const item in itemCart) {
            totalItems += itemCart[item];
        }
        setTotalItemsInCart(totalItems);
    }, [itemCart]);
    
    useEffect(() => {
        // Initialize the default cart when shoes data changes
        const defaultCartData = defaultCart();
        setItemCart(defaultCartData);
    }, [shoes]);

    const shoeItems = shoes.map(shoe => ({
        id: shoe.id,
        image: shoe.image,
        name: shoe.name,
        description: shoe.description,
        size: shoe.size,
        price: shoe.price
    }));

    const addToCart = (itemId) => {
        setItemCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setItemCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const totalAmount = () => {
        let amount = 0;
        for (const item in itemCart) {
            if (itemCart[item] > 0) {
                let itemInfo = shoeItems.find((shoe) => shoe.id === Number(item));
                amount += itemCart[item] * itemInfo.price;
            }
        }
        return amount;
    };

    const updateCart = (itemId, newAmount) => {
        setItemCart((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    console.log(itemCart);
    
    const contextValue = { itemCart, addToCart, removeFromCart, totalAmount, totalItemsInCart };
    return <OrderContext.Provider value={contextValue}>{props.children}</OrderContext.Provider>;
};
