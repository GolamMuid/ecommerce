
import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

// import img1 from '../rexona.jpg'

function Zoom() {
    return (
        <div>
            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: false,
                    src: `${process.env.PUBLIC_URL}assets/images/ATI.png`,
                    height: 100,
                    width: 200
                },
                largeImage: {
                    src: `${process.env.PUBLIC_URL}assets/images/ATI.png`,
                    width: 1200,
                    height: 1800
                }
            }} />
        </div>
    )
}

export default Zoom



