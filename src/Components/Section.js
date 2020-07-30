import React from 'react'
import Title from './Title'

export default function Section(props) {
    return (
        <div className="bg-gray-900 w-screen block text-white">
            <Title text={`> ${props.title}`}></Title>
        </div>
    )
}
