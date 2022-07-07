import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Fetching JSON data 

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch("./assets/dummy_data/product.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((inventory) => setInventory(inventory));

    }, []);

    // Fetching JSON data 


    // Adding product in the cart 

    const [cartItems, setCartItems] = useState([]);
    var [cartTotal, setCartTotal] = useState(0);

    const addToCart = (index) => {
        setCartItems((prevState) => [...prevState, inventory[index]])
        console.log(index)
        console.log(cartItems)
        console.log(cartItems[index].category);
        // var newPrice = parseInt(cartItems[index].currentPrice);
        // setCartTotal = cartTotal + newPrice;
        // console.log(newPrice)
    }

    // Adding product in the cart 

    return (
        <CartContext.Provider value={{ cartItems, addToCart }} > {children} </CartContext.Provider>
    )

}

export default CartContext