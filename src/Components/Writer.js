import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Writer(props) {
    return (
        <pre>
        <Typewriter
            options={{
                'skipAddStyles': true,
                'deleteSpeed': 1
            }}
            onInit={(typewriter) => {
                typewriter.changeDelay(1)
                .typeString(props.text)
                .start();
             }}
        />
        </pre>
    )
}
