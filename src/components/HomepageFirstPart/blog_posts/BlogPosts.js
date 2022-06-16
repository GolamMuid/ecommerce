import React from 'react'
import { BlogPostsContainer, BlogPostsImage, BlogPostsItem, BlogPostsItemContainer, BlogPostsItemDate, BlogPostsItemDescription, BlogPostsItemTitle, BlogPostsTitle } from './BlogPosts.style'
import { BsCalendar2Date } from 'react-icons/bs'


function BlogPosts() {
    return (
        <BlogPostsContainer>
            <BlogPostsTitle>
                Blog Posts
            </BlogPostsTitle>
            <BlogPostsItemContainer>
                <BlogPostsItem>
                    <BlogPostsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Blog/storage.jpg`}
                            alt=""
                        />
                    </BlogPostsImage>

                    <BlogPostsItemTitle>
                        Our Product Storage
                    </BlogPostsItemTitle>
                    <BlogPostsItemDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut odio facilisis, pulvinar velit sit amet, mollis tellus. Fusce eu neque scelerisque,
                    </BlogPostsItemDescription>
                    <BlogPostsItemDate>
                        <BsCalendar2Date />  03.09.22
                    </BlogPostsItemDate>
                </BlogPostsItem>

                <BlogPostsItem>
                    <BlogPostsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Blog/delivery.jpg`}
                            alt=""
                        />
                    </BlogPostsImage>

                    <BlogPostsItemTitle>
                        Our Delivery Process
                    </BlogPostsItemTitle>
                    <BlogPostsItemDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut odio facilisis, pulvinar velit sit amet, mollis tellus. Fusce eu neque scelerisque,
                    </BlogPostsItemDescription>
                    <BlogPostsItemDate>
                        <BsCalendar2Date />  03.09.22
                    </BlogPostsItemDate>
                </BlogPostsItem>

                <BlogPostsItem>
                    <BlogPostsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Blog/promise.jpg`}
                            alt=""
                        />
                    </BlogPostsImage>

                    <BlogPostsItemTitle>
                        Our Promise
                    </BlogPostsItemTitle>
                    <BlogPostsItemDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut odio facilisis, pulvinar velit sit amet, mollis tellus. Fusce eu neque scelerisque,
                    </BlogPostsItemDescription>
                    <BlogPostsItemDate>
                        <BsCalendar2Date />  03.09.22
                    </BlogPostsItemDate>
                </BlogPostsItem>
                <BlogPostsItem>
                    <BlogPostsImage>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/Blog/return.jpg`}
                            alt=""
                        />
                    </BlogPostsImage>

                    <BlogPostsItemTitle>
                        Our Easy Return Policy
                    </BlogPostsItemTitle>
                    <BlogPostsItemDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut odio facilisis, pulvinar velit sit amet, mollis tellus. Fusce eu neque scelerisque,
                    </BlogPostsItemDescription>
                    <BlogPostsItemDate>
                        <BsCalendar2Date />  03.09.22
                    </BlogPostsItemDate>
                </BlogPostsItem>

            </BlogPostsItemContainer>
        </BlogPostsContainer>
    )
}

export default BlogPosts