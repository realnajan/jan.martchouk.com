import React from 'react'

export default function NavigationItem(props) {
    return (
        <a className="text-white" href={props.href}>
            {props.text}
        </a>
    )
}
