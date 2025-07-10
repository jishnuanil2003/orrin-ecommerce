import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../components/firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Create the context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // 🔄 Sync to Firestore when cart changes and user is logged in
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        const user = auth.currentUser;
        if (user) {
            syncCartToFirestore(cartItems);
        }
    }, [cartItems]);

    // 🔁 Load cart from Firestore on login
    useEffect(() => {
        const fetchCart = async () => {
            const firestoreCart = await loadCartFromFirestore();
            setCartItems(firestoreCart);
            localStorage.setItem('cartItems', JSON.stringify(firestoreCart));
        };

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                fetchCart();
            } else {
                setCartItems([]);
                localStorage.removeItem('cartItems');
            }
        });

        return () => unsubscribe();
    }, []);

    // ➕ Add item to cart (if not already added)
    const addToCart = (item) => {
        if (!cartItems.some((i) => i.id === item.id)) {
            setCartItems((prev) => [...prev, item]);
        }
    };

    // ❌ Remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    // 🔄 Sync cart to Firestore
    const syncCartToFirestore = async (cartItems) => {
        const user = auth.currentUser;
        if (user) {
            const cartRef = doc(db, 'carts', user.uid);
            await setDoc(cartRef, { cartItems });
        }
    };

    // 🔁 Load cart from Firestore
    const loadCartFromFirestore = async () => {
        const user = auth.currentUser;
        if (user) {
            const cartRef = doc(db, 'carts', user.uid);
            const docSnap = await getDoc(cartRef);
            if (docSnap.exists()) {
                return docSnap.data().cartItems;
            }
        }
        return [];
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};