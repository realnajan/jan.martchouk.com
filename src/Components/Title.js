import React from 'react'

export default function Title(props) {

    let color = props.color ? props.color : "gray-100"

    return (
        <p className={`title text-${color} font-code text-2xl`}>{props.text}</p>
    )
}
