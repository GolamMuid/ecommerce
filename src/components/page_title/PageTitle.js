import React from 'react'
import { PageTitleContainer } from './PageTitle.style'

function PageTitle(props) {
    return (
        <PageTitleContainer>
            {props.pageTitle}
        </PageTitleContainer>
    )
}

export default PageTitle