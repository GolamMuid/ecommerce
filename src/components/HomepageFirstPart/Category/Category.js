import React, { useState } from 'react'
import { ArrowContainer, CategoryContainer, CategoryItem, CategoryMegaMenu, CategoryMegaMenuColumns, CategoryMegaMenuItem, CategoryMegaMenuTitle, CategoryMenuContainer, CategoryTitle, SubMenuContainer, SubMenuItem, SubSubMenuContainer, SubSubMenuItem } from './Category.style'
import { IoIosArrowDown } from 'react-icons/io'
import { MdComputer, MdHeadphones } from 'react-icons/md'
import { FiMonitor, FiCamera, } from 'react-icons/fi'
import { GoDeviceMobile } from 'react-icons/go'
import { GiHamburgerMenu } from 'react-icons/gi'

function Category() {
    const [categoryExpanded, setCategoryExpanded] = useState(false)

    const [menuExpanded1, setMenuExpanded1] = useState(true)

    // For more expandable menu
    //  const [menuExpanded2, setMenuExpanded2] = useState(true) 

    function handleCategoryExpanded() {
        categoryExpanded ? setCategoryExpanded(false) : setCategoryExpanded(true);
        console.log("category" + categoryExpanded)
    }

    function handleMenuExpanded1() {
        menuExpanded1 ? setMenuExpanded1(false) : setMenuExpanded1(true);
        console.log("menu" + menuExpanded1)
    }

    return (
        <CategoryContainer>

            <CategoryTitle onClick={handleCategoryExpanded} >
                <GiHamburgerMenu />   All Departments
            </CategoryTitle>


            <CategoryMenuContainer style={categoryExpanded ? { display: 'none' } : { display: 'block' }} >
                <CategoryItem onClick={handleMenuExpanded1}>
                    <MdComputer /> Computer
                    <ArrowContainer> <IoIosArrowDown /> </ArrowContainer>
                </CategoryItem>

                <SubMenuContainer style={menuExpanded1 ? { display: 'none' } : { display: 'block' }} >
                    <SubMenuItem>
                        Desktop
                        <CategoryMegaMenu>
                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Brands
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> ASUS </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Lenovo </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Dell </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> HP </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>

                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Components
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> Processor </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Harddisk </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Motherboard </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Power Supply </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>

                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Types
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> Regular Desktop </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> All in one PC </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Prebuilt PC </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Server PC </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>
                        </CategoryMegaMenu>

                    </SubMenuItem>

                    <SubMenuItem>
                        Laptop
                        <CategoryMegaMenu>
                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Brands
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> ASUS </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Lenovo </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Dell </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> HP </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>

                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Category
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> Budget Laptop </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Professional Laptop </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Gaming Laptop </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>

                            <CategoryMegaMenuColumns>
                                <CategoryMegaMenuTitle>
                                    Laptop Components
                                </CategoryMegaMenuTitle>

                                <CategoryMegaMenuItem> RAM </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Storage </CategoryMegaMenuItem>
                                <CategoryMegaMenuItem> Charger </CategoryMegaMenuItem>

                            </CategoryMegaMenuColumns>

                        </CategoryMegaMenu>
                    </SubMenuItem>

                    <SubMenuItem> Tablet </SubMenuItem>
                </SubMenuContainer>

                <CategoryItem> <FiMonitor /> TV and Smartbox </CategoryItem>
                <CategoryItem> <FiCamera /> Camera and Photography </CategoryItem>
                <CategoryItem> <MdHeadphones />  Headphones </CategoryItem>
                <CategoryItem> <GoDeviceMobile /> Smartphone and Tablet </CategoryItem>
            </CategoryMenuContainer>
        </CategoryContainer >
    )
}

export default Category