import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BlankSpace from '../components/Other Components/BlankSpace'
import PageTitle from '../components/page_title/PageTitle'
import ProductDefault from '../components/product_default/ProductDefault'
import { AllProductsContainer } from '../components/product_default/ProductDefault.style'

function Processor() {
    return (
        <>
            <Navbar />
            <BlankSpace />
            <PageTitle pageTitle="Processors" />
            <AllProductsContainer>
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12100.png"
                    oldPrice="$130" productName="Intel 12th Gen Core i3 processor (12100)" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12600.png"
                    oldPrice="$230" productName="Intel 12th Gen Core i5 processor (12400)" currentPrice="$220" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12700.png"
                    oldPrice="$330" productName="Intel 12th Gen Core i7 processor (12700)" currentPrice="$320" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/5600g.png"
                    oldPrice="$280" productName="AMD Ryzen 5 5600g processor" currentPrice="$250" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/4600g.png"
                    oldPrice="$220" productName="AMD Ryzen 5 4600g processor" currentPrice="$200" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12100.png"
                    oldPrice="$130" productName="Intel 12th Gen Core i3 processor OVERCLOCK (12200K)" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/5600g.png"
                    oldPrice="$230" productName="AMD Ryzen 5 5600x processor" currentPrice="$220" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12600.png"
                    oldPrice="$330" productName="Intel 12th Gen Core i5 processor OVERCLOCK (12600k)" currentPrice="$320" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/4600g.png"
                    oldPrice="$280" productName="AMD Ryzen 5 4600x processor" currentPrice="$250" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12700.png"
                    oldPrice="$230" productName="Intel 12th Gen Core i7 processor OVERCLOCK (12700)" currentPrice="$200" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12100.png"
                    oldPrice="$130" productName="Intel 12th Gen Core i3 processor (12100)" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12600.png"
                    oldPrice="$230" productName="Intel 12th Gen Core i5 processor (12400)" currentPrice="$220" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12700.png"
                    oldPrice="$330" productName="Intel 12th Gen Core i7 processor (12700)" currentPrice="$320" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/5600g.png"
                    oldPrice="$280" productName="AMD Ryzen 5 5600g processor" currentPrice="$250" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/4600g.png"
                    oldPrice="$220" productName="AMD Ryzen 5 4600g processor" currentPrice="$200" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12100.png"
                    oldPrice="$130" productName="Intel 12th Gen Core i3 processor OVERCLOCK (12200K)" currentPrice="$120" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/5600g.png"
                    oldPrice="$230" productName="AMD Ryzen 5 5600x processor" currentPrice="$220" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12600.png"
                    oldPrice="$330" productName="Intel 12th Gen Core i5 processor OVERCLOCK (12600k)" currentPrice="$320" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/4600g.png"
                    oldPrice="$280" productName="AMD Ryzen 5 4600x processor" currentPrice="$250" />
                <ProductDefault salePercentage="20%"
                    image="assets/images/processors/12700.png"
                    oldPrice="$230" productName="Intel 12th Gen Core i7 processor OVERCLOCK (12700)" currentPrice="$200" />


            </AllProductsContainer>
        </>
    )
}

export default Processor