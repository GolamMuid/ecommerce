import React from 'react'
import { Link } from 'react-router-dom'
import { CartCheckoutButton, CheckoutCostAmount, CheckoutCostContainer, CheckoutCostType, CheckoutDetailsContainer, CheckoutForm, CheckoutInformationContainer, CheckoutInput, CheckoutInputHalf, CheckoutLabel, DropdownOptions, DropdownSelect, GridCell, GridContainer, OrderSummary, OrderSummaryTitle } from './CheckoutDetails.style'
import CheckoutProductModel from './CheckoutProductModel'

function CheckoutDetails() {
    return (
        <CheckoutDetailsContainer>
            <CheckoutInformationContainer>
                <CheckoutForm>
                    <GridContainer>
                        <GridCell>
                            <CheckoutLabel>
                                Country
                            </CheckoutLabel>
                            <DropdownSelect>
                                <DropdownOptions> Bangladesh </DropdownOptions>
                                <DropdownOptions> USA </DropdownOptions>
                            </DropdownSelect>
                        </GridCell>
                        <GridCell>
                            <CheckoutLabel>
                                City
                            </CheckoutLabel>
                            <DropdownSelect>
                                <DropdownOptions> Dhaka </DropdownOptions>
                                <DropdownOptions> Rajshahi </DropdownOptions>
                                <DropdownOptions> Barishal </DropdownOptions>
                                <DropdownOptions> Chattogram </DropdownOptions>
                                <DropdownOptions> Khulna </DropdownOptions>
                                <DropdownOptions> Rangpur </DropdownOptions>
                                <DropdownOptions> Mymensingh  </DropdownOptions>
                                <DropdownOptions> Sylhet  </DropdownOptions>
                            </DropdownSelect>
                        </GridCell>
                    </GridContainer>

                    <CheckoutLabel>
                        Full Name
                    </CheckoutLabel>
                    <CheckoutInput />


                    <CheckoutLabel>
                        Address 1
                    </CheckoutLabel>
                    <CheckoutInput />

                    <GridContainer>
                        <GridCell>
                            <CheckoutLabel>
                                Email Address
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>

                        <GridCell>
                            <CheckoutLabel>
                                Phone no
                            </CheckoutLabel>
                            <CheckoutInput />
                        </GridCell>
                    </GridContainer>



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