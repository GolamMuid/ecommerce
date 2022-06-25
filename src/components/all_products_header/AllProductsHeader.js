import React from 'react'
import { TitleAndSortContainer, TitleContainer, AllProductsHeaderContainer, SortingContainer, SortingDropdownContainer, SortingDropdownOption, ListGridViewContainer, ViewSelector } from './AllProductsHeader.styled'
import { TbGridDots, TbList } from 'react-icons/tb'
import { FaListUl } from 'react-icons/fa'

function AllProductsHeader(props) {
    return (
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

                <SortingContainer >
                    <SortingDropdownContainer>
                        <SortingDropdownOption> Show: 5 </SortingDropdownOption>
                        <SortingDropdownOption> Show: 10 </SortingDropdownOption>
                        <SortingDropdownOption> Show: 15 </SortingDropdownOption>
                    </SortingDropdownContainer>
                </SortingContainer>
            </TitleAndSortContainer>

            <ListGridViewContainer>
                <ViewSelector >
                    <img src={process.env.PUBLIC_URL + "/" + props.grid} alt="" />
                </ViewSelector>
                <ViewSelector >
                    <img src={process.env.PUBLIC_URL + "/" + props.list} alt="" />
                </ViewSelector>


            </ListGridViewContainer>
        </AllProductsHeaderContainer>
    )
}

export default AllProductsHeader