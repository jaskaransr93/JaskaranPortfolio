import React from 'react'

const Logo = (props) => {
    return (
        <a href={props.url}>{props.children}</a>
        )
}

export default Logo;
