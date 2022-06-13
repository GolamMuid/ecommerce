import React, { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import ScrollToTopContainer from './ScrollToTop.style';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true)
        }
        else if (scrolled <= 200) {
            setVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <ScrollToTopContainer onClick={scrollToTop}
            style={{ display: visible ? 'block' : 'none' }}>
            <MdKeyboardArrowUp />
        </ScrollToTopContainer>
    )
}

export default ScrollToTop