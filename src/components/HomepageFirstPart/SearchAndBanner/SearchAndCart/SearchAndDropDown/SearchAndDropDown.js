import React, { useState } from 'react'
import { CategorySelectDropDown, CategorySelectOption, CategorySelectOptionContainer, CategorySelectOptionItems, DropDownContainer, SearchAndDropDownContainer, SearchBox, SearchButton, SearchContainer } from './SearchAndDropDown.style'
import { IoIosArrowDown } from 'react-icons/io'

function SearchAndDropDown() {

    // const [expanded, setExpanded] = useState(true);

    // function handleExpansion() {
    //     expanded ? setExpanded(false) : setExpanded(true);
    // }

    return (
        <SearchAndDropDownContainer>
            <DropDownContainer>
                <CategorySelectDropDown>
                    All Categories &nbsp; <IoIosArrowDown />

                    <CategorySelectOptionContainer>
                        <CategorySelectOptionItems> Computer </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Tv and Smartbox </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Camera and Photography </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Headphones </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Smartphone and Tablet </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Musical Instrument </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Accessories </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Clothing </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Personal </CategorySelectOptionItems>
                        <CategorySelectOptionItems> Fashion </CategorySelectOptionItems>
                    </CategorySelectOptionContainer>
                </CategorySelectDropDown>
            </DropDownContainer>
            <SearchContainer>
                <SearchBox placeholder='What do you need?' />
                <SearchButton> Search </SearchButton>
            </SearchContainer>

        </SearchAndDropDownContainer>
    )
}

export default SearchAndDropDown