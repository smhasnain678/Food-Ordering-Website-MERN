// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [food_list, setFoodList] = useState([]);
//   const url = 'http://localhost:4000';

//   const getTotalCartAmount = () => {
//     let total = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) total += itemInfo.price * cartItems[item];
//       }
//     }
//     return total;
//   };

//   const fetchCartData = async () => {
//     try {
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {}, // No userId in body
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       } else {
//         console.error('Failed to fetch cart:', response.data.message);
//         setCartItems({});
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       setCartItems({});
//     }
//   };

//   const addToCart = async (itemId) => {
//     try {
//       const response = await axios.post(
//         `${url}/api/cart/add`,
//         { itemId }, // No userId in body
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems((prev) => ({
//           ...prev,
//           [itemId]: (prev[itemId] || 0) + 1,
//         }));
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     try {
//       const response = await axios.post(
//         `${url}/api/cart/remove`,
//         { itemId }, // No userId in body
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems((prev) => ({
//           ...prev,
//           [itemId]: (prev[itemId] || 0) - 1,
//         }));
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       fetchCartData();
//       // Fetch food_list if needed
//       const fetchFoodList = async () => {
//         try {
//           const response = await axios.get(`${url}/api/food/list`);
//           if (response.data.success) {
//             setFoodList(response.data.data);
//           }
//         } catch (error) {
//           console.error('Error fetching food list:', error);
//         }
//       };
//       fetchFoodList();
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;






import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    // useEffect(() => {
    //     if (!Object.keys(cartItems).length && food_list.length) {
    //         const newCart = {};
    //         food_list.forEach(item => {
    //             newCart[item._id] = 0;
    //         });
    //         setCartItems(newCart);
    //     }
    // }, [food_list]);
    // console.log("food_list in display:", food_list);


    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list")
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;