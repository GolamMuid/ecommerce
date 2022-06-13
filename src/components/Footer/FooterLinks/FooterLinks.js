import React from 'react'
import { FooterLinkBox, FooterLinkItem, FooterLinksContainer, FooterLinkTitle } from './FooterLinks.style'

function FooterLinks() {
    return (
        <FooterLinksContainer>
            <FooterLinkBox>
                <FooterLinkTitle>
                    Find It Fast
                </FooterLinkTitle>
                <FooterLinkItem> Laptos and Computers  </FooterLinkItem>
                <FooterLinkItem> Smart Phone and Mobile  </FooterLinkItem>
                <FooterLinkItem> Tv and Audio  </FooterLinkItem>
                <FooterLinkItem> Camera and Photography  </FooterLinkItem>
                <FooterLinkItem> Accessories  </FooterLinkItem>
            </FooterLinkBox>

            <FooterLinkBox>
                <FooterLinkTitle>
                    Information
                </FooterLinkTitle>
                <FooterLinkItem> Find a Store  </FooterLinkItem>
                <FooterLinkItem> About Us  </FooterLinkItem>
                <FooterLinkItem> Contact Us  </FooterLinkItem>
                <FooterLinkItem> Delivery Options  </FooterLinkItem>
                <FooterLinkItem> Privacy Policy  </FooterLinkItem>
            </FooterLinkBox>

            <FooterLinkBox>
                <FooterLinkTitle>
                    Customer Care
                </FooterLinkTitle>
                <FooterLinkItem> My Account  </FooterLinkItem>
                <FooterLinkItem> Older History  </FooterLinkItem>
                <FooterLinkItem> Wishlist </FooterLinkItem>
                <FooterLinkItem> Customer Service  </FooterLinkItem>
                <FooterLinkItem> Return/Exchange </FooterLinkItem>
            </FooterLinkBox>

        </FooterLinksContainer>
    )
}

export default FooterLinks