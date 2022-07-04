import React from 'react'
import { BlogDescription, BlogDetailContainer, BlogDetailImage, BlogTitle } from './BlogDetail.style'

function BlogDetail() {
    return (
        <BlogDetailContainer>
            <BlogDetailImage>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Blog Detail/drone.jpg`}
                    alt=""
                />
            </BlogDetailImage>

            <BlogTitle>
                Our Product Storage
            </BlogTitle>

            <BlogDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget molestie ante. In molestie justo ut tortor feugiat, ac maximus urna lobortis. Donec in tincidunt arcu. Integer pretium ante in ultricies bibendum. Fusce vitae porta elit. Vestibulum risus dolor, consequat sed faucibus euismod, condimentum ac purus. Aliquam erat volutpat. Aliquam ante risus, eleifend nec lacus at, mattis aliquet dolor. Integer scelerisque fringilla ligula, id venenatis nibh sollicitudin ut. Vivamus id lorem at ante facilisis egestas non vel neque. Sed ac mi ornare, mollis felis sit amet, hendrerit turpis. Proin eget accumsan lorem, sed vehicula sem. Praesent condimentum tristique ipsum, at interdum libero vehicula et.
                <br />
                <br />
                Sed a ligula hendrerit, dictum velit quis, aliquet libero. Praesent vitae justo scelerisque, fermentum quam eu, dapibus diam. Ut porttitor dui vitae velit pulvinar lobortis. Vivamus tempus lacinia gravida. Nulla tempor quis felis eget sagittis. Nam condimentum maximus libero vel sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar massa. Sed dapibus id urna non consectetur. In rhoncus vitae lacus eu sagittis.
                <br />
                <br />
                Sed laoreet ultrices arcu hendrerit posuere. Integer vestibulum orci in venenatis tincidunt. Cras tempor tristique ipsum vel rhoncus. Nulla at porttitor nisi. Nulla consequat vel ante vitae maximus. Suspendisse interdum, purus eu aliquet auctor, felis lorem posuere nulla, tempus hendrerit eros purus nec velit. Fusce nec ligula sit amet urna consequat dignissim sed fringilla nisl. Proin sollicitudin interdum arcu, sed pulvinar ex interdum vel. Quisque et pellentesque metus. Nulla sit amet libero quis sapien posuere imperdiet nec in orci. Sed ac pulvinar nibh.
            </BlogDescription>

        </BlogDetailContainer>
    )
}

export default BlogDetail