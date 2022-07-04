import React from 'react'
import { Link } from 'react-router-dom'
import { CartCheckoutButton, CheckoutCostAmount, CheckoutCostContainer, CheckoutCostType, CheckoutDetailsContainer, CheckoutForm, CheckoutInformationContainer, CheckoutInput, CheckoutInputHalf, CheckoutLabel, CountryOptions, CountrySelect, GridCell, GridContainer, OrderSummary, OrderSummaryTitle } from './CheckoutDetails.style'
import CheckoutProductModel from './CheckoutProductModel'

function CheckoutDetails() {
    return (
        <CheckoutDetailsContainer>
            <CheckoutInformationContainer>
                <CheckoutForm>
                    <CheckoutLabel>
                        Country
                    </CheckoutLabel>
                    <CountrySelect>
                        <CountryOptions> Bangladesh </CountryOptions>
                        <CountryOptions> USA </CountryOptions>
                    </CountrySelect>
                    <GridContainer>
                        <GridCell>
                            <CheckoutLabel>
                                First Name
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>
                        <GridCell>
                            <CheckoutLabel>
                                Last Name
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>
                    </GridContainer>

                    <CheckoutLabel>
                        Address 1
                    </CheckoutLabel>
                    <CheckoutInput />

                    <CheckoutLabel>
                        Address 2
                    </CheckoutLabel>
                    <CheckoutInput />

                    <GridContainer>
                        <GridCell>
                            <CheckoutLabel>
                                City
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>

                        <GridCell>
                            <CheckoutLabel>
                                Postal Code / ZIP
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>
                    </GridContainer>

                    <CheckoutLabel>
                        Email Address
                    </CheckoutLabel>
                    <CheckoutInputHalf />

                    <CheckoutLabel>
                        Phone no
                    </CheckoutLabel>
                    <CheckoutInputHalf />

                </CheckoutForm>
            </CheckoutInformationContainer>

            <OrderSummary>
                <OrderSummaryTitle>
                    Order Summary
                </OrderSummaryTitle>

                <CheckoutProductModel
                    image="assets/images/Cart/iphone.jpg"
                    name="iphone 11 pro"
                    color="Black"
                    qty="1"
                    price="499"
                />
                <CheckoutProductModel
                    image="assets/images/Cart/earpod.jpg"
                    name="Apple Earpods"
                    color="White"
                    qty="1"
                    price="199"
                />
                <CheckoutProductModel
                    image="assets/images/Cart/ipad.jpg"
                    name="ipad pro"
                    color="silver"
                    qty="1"
                    price="699"
                />
                <CheckoutProductModel
                    image="assets/images/Cart/macair.jpg"
                    name="Macbook Air"
                    color="Black"
                    qty="1"
                    price="999"
                />
                <CheckoutCostContainer>
                    <CheckoutCostType>
                        Product Price
                    </CheckoutCostType>
                    <CheckoutCostAmount>
                        $2499
                    </CheckoutCostAmount>
                    <CheckoutCostType>
                        Shipping Charge
                    </CheckoutCostType>
                    <CheckoutCostAmount>
                        $50
                    </CheckoutCostAmount>
                </CheckoutCostContainer>
                <hr />
                <CheckoutCostContainer>
                    <CheckoutCostType>
                        Total
                    </CheckoutCostType>
                    <CheckoutCostAmount>
                        $2549
                    </CheckoutCostAmount>
                    <Link to='/cart'>
                        <CartCheckoutButton>
                            Edit Cart
                        </CartCheckoutButton>
                    </Link>
                    <Link to='/'>
                        <CartCheckoutButton>
                            Proceed to payment
                        </CartCheckoutButton>
                    </Link>
                </CheckoutCostContainer>

            </OrderSummary>
        </CheckoutDetailsContainer>
    )
}

export default CheckoutDetails