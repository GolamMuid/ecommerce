import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartAdditionalInfo from '../components/cart_page_components/CartAdditionalInfo'
import CartEmpty from '../components/cart_page_components/CartEmpty'
import CartFullSize from '../components/cart_page_components/CartFullSize'
import { CartButton, CartButtonContainer, CartFullContainer } from '../components/cart_page_components/CartFullSize.style'
import CartPageProductModel from '../components/cart_page_product_model/CartPageProductModel'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import SearchAndCart from '../components/search_cart/SearchAndCart'
import CartContext from '../contexts/CartContext/CartContext'
import cartItems from '../data/CartData'

function Cart() {

    const [items, setItems] = useState(cartItems);

    const deleteItem = (index) =>
        setItems((items) => items.filter((_, i) => i !== index));

    // const deleteItem = (index) => {
    //     console.log(index)
    // }

    const { addToCart } = useContext(CartContext)


    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <PageTitle pageTitle="Cart" />
            <CartFullContainer>
                {items.length === 0 ? <CartEmpty /> : <CartFullSize />}

                {/* <CartPageProductModel
                    image="assets/images/Cart/iphone.jpg"
                    name="iphone 11 pro"
                    price="599" />
                <CartPageProductModel
                    image="assets/images/Cart/macair.jpg"
                    name="Macbook air"
                    price="799" /> */}

                {items.map((item, index) => {
                    return (<CartPageProductModel
                        key={index}
                        index={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        deleteItem={deleteItem} />)
                })
                }
            </CartFullContainer>
            <CartButtonContainer>
                <Link to="/"> <CartButton> Contiunue Shopping </CartButton> </Link>
                <CartButton> Update Cart </CartButton>
            </CartButtonContainer>
            <CartAdditionalInfo />
            <Footer />
        </>
    )
}

export default Cart