import React from 'react'
import CheckoutDetails from '../components/checkout_details/CheckoutDetails'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import SearchAndCart from '../components/search_cart/SearchAndCart'

function Checkout() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <CheckoutDetails />
            <Footer />
        </>
    )
}

export default Checkout