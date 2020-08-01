import React from 'react'
import AsciiWriter from '../Components/AsciiWriter'

export default function Welcome() {

    return (
        <div className="text-white">
            <AsciiWriter text="hello" font="Standard"></AsciiWriter>
        </div>
    )
}
