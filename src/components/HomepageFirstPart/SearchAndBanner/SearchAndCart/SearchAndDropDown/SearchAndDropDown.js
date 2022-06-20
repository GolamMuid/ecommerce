import React, { useState } from 'react'
import { CategorySelectDropDown, CategorySelectOption, CategorySelectOptionContainer, CategorySelectOptionItems, DropDownContainer, SearchAndDropDownContainer, SearchBox, SearchButton, SearchContainer } from './SearchAndDropDown.style'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

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

                        <Link to="/tv">  <CategorySelectOptionItems>  TV and Smartbox </CategorySelectOptionItems> </Link>
                        <Link to="/camera">  <CategorySelectOptionItems>  Camera and Photography </CategorySelectOptionItems> </Link>
                        <Link to="/headphones">  <CategorySelectOptionItems>  Headphones </CategorySelectOptionItems> </Link>
                        <Link to="/smartphones">  <CategorySelectOptionItems>  Smartphones and Tablets </CategorySelectOptionItems> </Link>
                        <Link to="/music">  <CategorySelectOptionItems>  Musical Instruments </CategorySelectOptionItems> </Link>
                        <Link to="/accessories">  <CategorySelectOptionItems>  Accessories </CategorySelectOptionItems> </Link>
                        <Link to="/clothing">  <CategorySelectOptionItems>  Clothing </CategorySelectOptionItems> </Link>
                        <Link to="/personal">  <CategorySelectOptionItems>  Personal Care </CategorySelectOptionItems> </Link>
                        <Link to="/grocery">  <CategorySelectOptionItems>  Groceries </CategorySelectOptionItems> </Link>

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