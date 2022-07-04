import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import ListViewProduct from '../components/product_default/ListViewProduct'
import { AllProductsContainerList } from '../components/product_default/ListViewProduct.style'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'
import SearchAndCart from '../components/search_cart/SearchAndCart'
import { TbGridDots } from 'react-icons/tb'
import { FaListUl } from 'react-icons/fa'
import { AllProductsHeaderContainer, ListGridViewContainer, SortingContainer, SortingDropdownContainer, SortingDropdownOption, TitleAndSortContainer, TitleContainer, ViewSelector } from '../components/all_products_header/AllProductsHeader.styled'
import BlogPosts from '../components/HomepageFirstPart/blog_posts/BlogPosts'
import Footer from '../components/Footer/Footer'


function AllProducts() {

    const VIEW_STATE = {
        grid: 'grid',
        list: 'list'
    }

    const [view, setView] = useState(VIEW_STATE.grid)

    return (
        <>
            <Navbar />
            <BlankSpace />
            <SearchAndCart />
            {/* <AllProductsHeader grid="assets/images/List View/grid.png" list="assets/images/List View/list.png" /> */}

            <AllProductsHeaderContainer>
                <TitleAndSortContainer>
                    <TitleContainer>
                        All Products
                    </TitleContainer>
                    <SortingContainer >
                        <SortingDropdownContainer>
                            <SortingDropdownOption> Default Sorting </SortingDropdownOption>
                            <SortingDropdownOption> Price: Low to High </SortingDropdownOption>
                            <SortingDropdownOption> Price: High to Low </SortingDropdownOption>
                        </SortingDropdownContainer>
                    </SortingContainer>


                </TitleAndSortContainer>

                <ListGridViewContainer>
                    <ViewSelector onClick={() => setView(VIEW_STATE.grid)} >
                        < TbGridDots />
                    </ViewSelector>
                    <ViewSelector onClick={() => setView(VIEW_STATE.list)} >
                        < FaListUl />
                    </ViewSelector>

                </ListGridViewContainer>
            </AllProductsHeaderContainer>

            {view === VIEW_STATE.list &&

                <AllProductsContainerList>
                    <ListViewProduct
                        image="assets/images/List View/monitor.jpg"
                        category="electronics"
                        title="Samsung 43inch Curved TV 4k"
                        oldPrice="$399.99"
                        currentPrice="$299.99"
                        availability="Available" />

                    <ListViewProduct
                        image="assets/images/List View/tcl.jpg"
                        category="electronics"
                        title="TCL 42inch Curved TV 4k"
                        oldPrice="$399.99"
                        currentPrice="$299.99"
                        availability="Available" />
                    <ListViewProduct
                        image="assets/images/List View/lg.jpg"
                        category="electronics"
                        title="LG 65inch Curved TV 4k"
                        oldPrice="$399.99"
                        currentPrice="$299.99"
                        availability="Available" />
                    <ListViewProduct
                        image="assets/images/List View/sony.jpg"
                        category="electronics"
                        title="Sony Bravia 44inch TV 4k"
                        oldPrice="$399.99"
                        currentPrice="$299.99"
                        availability="Available" />
                    <ListViewProduct
                        image="assets/images/List View/walton.jpg"
                        category="electronics"
                        title="Walton 42inch Android TV"
                        oldPrice="$399.99"
                        currentPrice="$299.99"
                        availability="Available" />

                </AllProductsContainerList>}

            {view === VIEW_STATE.grid &&

                <AllProductsContainer>
                    <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                        image="assets/images/List View/monitor.jpg"
                        oldPrice="$399.99" productName="Samsung 43inch Curved TV 4k" currentPrice="$299.99" />

                    <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                        image="assets/images/List View/tcl.jpg"
                        oldPrice="$399.99" productName="TCL 42inch Curved TV 4k" currentPrice="$299.99" />

                    <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                        image="assets/images/List View/lg.jpg"
                        oldPrice="$399.99" productName="LG 65inch Curved TV 4k" currentPrice="$299.99" />

                    <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                        image="assets/images/List View/sony.jpg"
                        oldPrice="$399.99" productName="Sony Bravia 44inch TV 4k" currentPrice="$299.99" />

                    <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                        image="assets/images/List View/walton.jpg"
                        oldPrice="$399.99" productName="Walton 42inch Android TV" currentPrice="$299.99" />

                </AllProductsContainer>}

            <BlogPosts />
            <Footer />
        </>
    )
}

export default AllProducts