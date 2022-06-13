import React, { useState } from 'react'
import { CategorySelectDropDown, CategorySelectOption, CategorySelectOptionContainer, CategorySelectOptionItems, DropDownContainer, SearchAndDropDownContainer, SearchBox, SearchButton, SearchContainer } from './SearchAndDropDown.style'
import { IoIosArrowDown } from 'react-icons/io'

function SearchAndDropDown() {

    const [expanded, setExpanded] = useState(true);

    function handleExpansion() {
        expanded ? setExpanded(false) : setExpanded(true);
    }

    return (
        <SearchAndDropDownContainer>
            <DropDownContainer>
                <CategorySelectDropDown onClick={handleExpansion}>
                    All Categories &nbsp; <IoIosArrowDown />
                </CategorySelectDropDown>
                <CategorySelectOptionContainer style={expanded ? { display: 'none' } : { display: 'block' }} >
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                    <CategorySelectOptionItems> Option </CategorySelectOptionItems>
                </CategorySelectOptionContainer>
            </DropDownContainer>
            <SearchContainer>
                <SearchBox placeholder='What do you need?' />
                <SearchButton> Search </SearchButton>
            </SearchContainer>

        </SearchAndDropDownContainer>
    )
}

export default SearchAndDropDown