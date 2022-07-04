import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import SearchAndCart from '../components/search_cart/SearchAndCart'
import BlogDetail from '../components/blog_detail/BlogDetail'
import Footer from '../components/Footer/Footer'


function BlogDescription() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            <BlogDetail />
            <Footer />
        </>
    )
}

export default BlogDescription