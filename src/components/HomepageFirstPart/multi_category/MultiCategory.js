import React, { useState } from 'react'
import ProductDefault from '../../product_default/ProductDefault'
import { MultiCategoryContainer, MultiCategoryItemContainer, MultiCategoryMainTitle, MultiCategorySubTitle, MultiCategorySubTitleContainer, MultiCategoryTitleContainer } from './MultiCategory.style'

function MultiCategory() {

    const FORM_STATE = {
        mobile: 'mobile',
        laptop: 'laptop',
        headphones: 'headphones',
        television: 'television'
    }
    const [form, setForm] = useState(FORM_STATE.mobile);


    return (
        <MultiCategoryContainer>
            <MultiCategoryTitleContainer>
                <MultiCategoryMainTitle>
                    Gadgets
                </MultiCategoryMainTitle>
                <MultiCategorySubTitleContainer>
                    <MultiCategorySubTitle onClick={() => setForm(FORM_STATE.mobile)} > Mobile Phone </MultiCategorySubTitle>
                    <MultiCategorySubTitle onClick={() => setForm(FORM_STATE.laptop)}> Laptops </MultiCategorySubTitle>
                    <MultiCategorySubTitle onClick={() => setForm(FORM_STATE.headphones)}> Headphones </MultiCategorySubTitle>
                    <MultiCategorySubTitle onClick={() => setForm(FORM_STATE.television)}> Televisions </MultiCategorySubTitle>
                </MultiCategorySubTitleContainer>
            </MultiCategoryTitleContainer>

            {form === FORM_STATE.mobile && <MultiCategoryItemContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/smartphone/iphone.jpg"
                    oldPrice="$50" productName="iPhone 11 Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/smartphone/note22.jpg"
                    oldPrice="$50" productName="Samsung Galazy Note 22" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/smartphone/op8.jpg"
                    oldPrice="$50" productName="One Plus Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/smartphone/xiaomi11.jpg"
                    oldPrice="$50" productName="Xiaomi 11 Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/smartphone/Realme8.jpg"
                    oldPrice="$50" productName="Realme 8 Pro" currentPrice="$40" />

            </MultiCategoryItemContainer>}

            {form === FORM_STATE.laptop && <MultiCategoryItemContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Multi Category/macpro.jpg"
                    oldPrice="$50" productName="Macbook Pro" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/Multi Category/macair.jpg"
                    oldPrice="$50" productName="Macbook Air" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/Multi Category/blade15.jpg"
                    oldPrice="$50" productName="Razer Blade 15" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/Multi Category/thinkpad.jpg"
                    oldPrice="$50" productName="Lenovo Thinkpad 15" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/Multi Category/gl504.jpg"
                    oldPrice="$50" productName="ASUS ROG GL504" currentPrice="$40" />

            </MultiCategoryItemContainer>}

            {form === FORM_STATE.headphones && <MultiCategoryItemContainer>

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/headphones/audio.jpg"
                    oldPrice="$50" productName="Audio Technica ATH M30X" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/headphones/sc.png"
                    oldPrice="$50" productName="SkullCandy Hesh" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/headphones/final.jpg"
                    oldPrice="$50" productName="Final Audio 8000" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/headphones/shure.jpg"
                    oldPrice="$50" productName="Shure Aonic 50" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/headphones/beats.jpg"
                    oldPrice="$50" productName="Beats by Dr. Dre" currentPrice="$40" />
            </MultiCategoryItemContainer>}

            {form === FORM_STATE.television && <MultiCategoryItemContainer>
                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/tv/op.jpg"
                    oldPrice="$50" productName="OnePlus TV 42 inch" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage="True"
                    image="assets/images/tv/sony.jpg"
                    oldPrice="$50" productName="Sony Smart TV 32 inch " currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage=""
                    image="assets/images/tv/mi.jpg"
                    oldPrice="$50" productName="Xiaomi MI TV 56inch 4K" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="" isSalePercentage=""
                    image="assets/images/tv/mi-box.jpeg"
                    oldPrice="$50" productName="Xiaomi TV Box" currentPrice="$40" />

                <ProductDefault salePercentage="20%" isNew="True" isSalePercentage="True"
                    image="assets/images/tv/apple.jpg"
                    oldPrice="$50" productName="Apple Smart TV box " currentPrice="$40" />
            </MultiCategoryItemContainer>}


        </MultiCategoryContainer>
    )
}

export default MultiCategory