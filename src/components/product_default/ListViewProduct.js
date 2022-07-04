import React from 'react'
import { AddButton, Availability, CategoryAndWishlistContainer, DeliveryInformationContainer, DeliveryType, ImageContainer, ListViewCategory, ListViewProductContainer, ListViewProductDescription, ListViewRating, ListViewTitle, ListViewWishlist, NewPrice, OldPrice, ProductInformationContainer, ProductViewButton } from './ListViewProduct.style'
import { BsHeart, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function ListViewProduct(props) {
    return (
        <ListViewProductContainer>
            <ImageContainer>
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="" />
                <Link to='/detail'> <ProductViewButton> View Product </ProductViewButton> </Link>
            </ImageContainer>

            <ProductInformationContainer>
                <CategoryAndWishlistContainer>
                    <ListViewCategory>
                        {props.category}
                    </ListViewCategory>
                    <ListViewWishlist>
                        <BsHeart />
                    </ListViewWishlist>
                </CategoryAndWishlistContainer>
                <ListViewTitle>
                    {props.title}
                </ListViewTitle>
                <ListViewRating>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </ListViewRating>
                <ListViewProductDescription>
                    <ul>
                        <li> 4X more pbels than Full HD means you're getting 4x the resolution, so you'll clearly see the difference. </li>
                        <li> See vibrant and pure color for a realistic experience </li>
                        <li> One Remote automatically detects and controls all your connected devices and content with no manual programming required </li>
                        <li> Smooth action on fast moving content with Motion Rate 120 </li>
                    </ul>
                </ListViewProductDescription>
            </ProductInformationContainer>

            <DeliveryInformationContainer>
                <DeliveryType>
                    Free Delivery
                </DeliveryType>
                <OldPrice>
                    {props.oldPrice}
                </OldPrice>
                <NewPrice>
                    {props.currentPrice}
                </NewPrice>
                <Availability>
                    {props.availability}
                </Availability>

                <AddButton>
                    Add to Cart
                </AddButton>
                <AddButton>
                    Add to Compare
                </AddButton>

            </DeliveryInformationContainer>

        </ListViewProductContainer>
    )
}

export default ListViewProduct