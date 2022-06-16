import React, { useState } from 'react'
import { ArrowContainer, CategoryContainer, CategoryItem, CategoryMenuContainer, CategoryTitle, SubMenuContainer, SubMenuItem, SubSubMenuContainer, SubSubMenuItem } from './CategoryMobile.style'
import { IoIosArrowDown } from 'react-icons/io'
import { MdComputer, MdHeadphones } from 'react-icons/md'
import { FiMonitor, FiCamera, } from 'react-icons/fi'
import { GoDeviceMobile } from 'react-icons/go'
import { GiHamburgerMenu, GiLipstick } from 'react-icons/gi'
import { FaTshirt } from 'react-icons/fa'
import { BsMusicNoteBeamed, BsLightningCharge, BsSunglasses } from 'react-icons/bs'


function CategoryMobile() {
    const [categoryExpanded, setCategoryExpanded] = useState(false)

    const [menuExpanded1, setMenuExpanded1] = useState(true)

    // For more expandable menu
    //  const [menuExpanded2, setMenuExpanded2] = useState(true) 

    const [subMenuExpanded1, setSubMenuExpanded1] = useState(true)

    // For more expandable submenu
    // const [subMenuExpanded2, setSubMenuExpanded2] = useState(true)

    function handleCategoryExpanded() {
        categoryExpanded ? setCategoryExpanded(false) : setCategoryExpanded(true);
        console.log("category" + categoryExpanded)
    }

    function handleMenuExpanded1() {
        menuExpanded1 ? setMenuExpanded1(false) : setMenuExpanded1(true);
        console.log("menu" + menuExpanded1)
    }

    function handleSubMenuExpanded1() {
        subMenuExpanded1 ? setSubMenuExpanded1(false) : setSubMenuExpanded1(true);
        console.log("submenu" + subMenuExpanded1)
    }

    return (
        <CategoryContainer>

            <CategoryTitle onClick={handleCategoryExpanded} >
                <GiHamburgerMenu />  All Departments
            </CategoryTitle>


            <CategoryMenuContainer style={categoryExpanded ? { display: 'none' } : { display: 'block' }} >
                <CategoryItem onClick={handleMenuExpanded1}>
                    <MdComputer /> Computer
                    <ArrowContainer> <IoIosArrowDown /> </ArrowContainer>
                </CategoryItem>

                <SubMenuContainer style={menuExpanded1 ? { display: 'none' } : { display: 'block' }} >
                    <SubMenuItem onClick={handleSubMenuExpanded1}>
                        PC components
                        <ArrowContainer>
                            <IoIosArrowDown />
                        </ArrowContainer>
                    </SubMenuItem>

                    <SubSubMenuContainer style={subMenuExpanded1 ? { display: 'none' } : { display: 'block' }} >
                        <SubSubMenuItem> Processor </SubSubMenuItem>
                        <SubSubMenuItem> Hard Drive </SubSubMenuItem>
                        <SubSubMenuItem> Motherboard </SubSubMenuItem>
                    </SubSubMenuContainer>


                    <SubMenuItem> All in one PC </SubMenuItem>
                    <SubMenuItem> Prebuilt PC </SubMenuItem>
                </SubMenuContainer>

                <CategoryItem> <FiMonitor /> TV and Smartbox </CategoryItem>
                <CategoryItem> <FiCamera /> Camera and Photography </CategoryItem>
                <CategoryItem> <MdHeadphones /> Headphones </CategoryItem>
                <CategoryItem> <GoDeviceMobile /> Smartphone and Tablet </CategoryItem>
                <CategoryItem> <BsMusicNoteBeamed /> Musical Instruments </CategoryItem>
                <CategoryItem> <BsLightningCharge /> Accessories </CategoryItem>
                <CategoryItem> <FaTshirt /> Clothing </CategoryItem>
                <CategoryItem> <GiLipstick /> Personal </CategoryItem>
                <CategoryItem> <BsSunglasses /> Fashion </CategoryItem>
            </CategoryMenuContainer>
        </CategoryContainer>
    )
}

export default CategoryMobile