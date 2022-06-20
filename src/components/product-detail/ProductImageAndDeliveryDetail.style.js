import styled from "styled-components";

export const ProductImageAndDeliveryDetailContainer = styled.div`
display: grid;
grid-template-columns: minmax(0, 2fr) 3fr 2fr;
padding: 10px;
column-gap: 10px;
margin-bottom: 10px;
`

export const ProductImageView = styled.div`
img{
    max-height: 400px;
    max-width: 100%;
}
`
export const ProductDetails = styled.div`
padding: 10px;
padding-top: 0;
`
export const ProductInformationContianer = styled.div`
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`

export const ProductDetailTitle = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding-bottom: 10px;
`
export const ProductDetailRating = styled.span`
color: ${props => props.theme.color.rating};
`
export const ProductRatingNumbers = styled.span`
color : ${props => props.theme.color.primary};
font-size: 0.825rem;
font-weight: 400;
padding: 6px;
`
export const ProductBrand = styled.div`
color : ${props => props.theme.color.primary};
font-size: 0.825rem;
font-weight: 400;
padding: 6px 0px 10px;
`
export const ProductDetailPriceInfo = styled.div`
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};;
`

export const ProductDetailPrice = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
padding: 10px 0;
`
export const ProductDetailOldPriceContainer = styled.div`
`
export const ProductDetailOldPrice = styled.span`
color : ${props => props.theme.color.primary};
font-size: 0.825rem;
font-weight: 400;
padding: 6px 0px;
text-decoration: line-through;
`
export const ProductDetailDiscount = styled.span`
color : ${props => props.theme.color.primary};
font-size: 0.825rem;
font-weight: 400;
padding: 10px;
`
export const ProductDetailPromotion = styled.div`
color : ${props => props.theme.color.primary};
font-size: 0.825rem;
font-weight: 400;
padding: 6px 0px;
`
export const ProductVariantAndPurchaseContainer = styled.div`
`
export const ProductVariantContainer = styled.div`
padding: 10px 10px 10px 0;
`
export const ProductVariantSelect = styled.select`
padding: 10px;
border: none;
background-color: ${props => props.theme.color.borderPrimary};
`
export const ProductVariantOptions = styled.option`
padding: 10px;
border: none;
background-color: ${props => props.theme.color.borderPrimary};
`

export const ProductDetailQuantityContianer = styled.div`
font-size: 1rem;
color: ${props => props.theme.color.primary};
`
export const ProductDetailQuantityButton = styled.button`
padding: 4px 8px;
border: none;
background-color: ${props => props.theme.color.bgTertiary};
cursor: pointer;
`
export const ProductDetailQuantityNumber = styled.span`
padding: 3px 6px;
`
export const ProductPurchaseContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 10px;
padding: 20px 0;
`
export const ProductDetailAddToCartButton = styled.button`
background-color: ${props => props.theme.color.invertedBg};
color: ${props => props.theme.color.invertedPrimary};
padding: 10px;
border-radius: 4px;
border: none;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.secondary};
    outline: solid 1px;
}
`
export const ProductDetailBuyNowButton = styled.button`
background-color: ${props => props.theme.color.invertedBg};
color: ${props => props.theme.color.invertedPrimary};
padding: 10px;
border-radius: 4px;
border: none;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    background-color: ${props => props.theme.color.bg};
    color: ${props => props.theme.color.secondary};
    outline: solid 1px;
}
`

export const DeliveryDetailContainer = styled.div`
padding: 10px;
`
export const DeliveryLocationDetails = styled.div`

`
export const DeliveryTitle = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
padding: 10px 0;
`
export const DeliveryLocationContainer = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 2fr;
padding-bottom: 20px;
`
export const DeliveryLocationIcon = styled.div`
font-size: 1.5rem;
color:  ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
`
export const DeliveryLocation = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.secondary};
`
export const DeliveryLocationChange = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`
export const DeliveryTypeContainer = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 2fr;
`
export const DeliveryTypeIcon = styled.div`
font-size: 1.5rem;
color: ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
`
export const DeliveryTypeTimeContainer = styled.div`
display: grid;
grid-template-columns: 1fr;
row-gap: 4px;
`
export const DeliveryType = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.secondary};
`
export const DeliveryTime = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
`
export const DeliveryCharge = styled.div`
font-size: 1.125rem;
font-weight: 500;
color: ${props => props.theme.color.secondary};
display: flex;
align-items: center;
justify-content: center;
`

export const CodContainer = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 2fr;
padding-bottom: 20px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary};
`
export const CodIcon = styled.div`
font-size: 1.5rem;
color: ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
`
export const CodAvailability = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.secondary};
`
export const ReturnPolicyDetailsContainer = styled.div`
padding-bottom: 20px;
border-bottom: solid 1px ${props => props.theme.color.borderPrimary} ;
`
export const ServiceTitle = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
padding: 10px 0;
`
export const ReturnPolicyContainer = styled.div`
display: grid;
grid-template-columns: 1fr 5fr 2fr;
padding: 10px 0;
`
export const ReturnIcon = styled.div`
font-size: 1.5rem;
color: ${props => props.theme.color.primary};
display: flex;
align-items: center;
justify-content: center;
`
export const ReturnPolicyDetails = styled.div`
display: grid;
grid-template-columns: 1fr;
`
export const ReturnPolicy = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.secondary};
`
export const ReturnPolicyCondition = styled.div`
font-size: 0.825rem;
color:  ${props => props.theme.color.primary};
`

export const SellerInfoContainer = styled.div`
`
export const SellerTitle = styled.div`
font-size: 0.825rem;
color: ${props => props.theme.color.primary};
padding: 10px 0;
`
export const SellerName = styled.div`
font-size: 1rem;
color:  ${props => props.theme.color.secondary};
`