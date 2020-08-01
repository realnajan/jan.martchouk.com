import React from 'react'
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js'
import small from 'figlet/importable-fonts/Small.js'
import Typewriter from 'typewriter-effect';

figlet.parseFont('Standard', standard);
figlet.parseFont('small', small);

export default function AsciiWriter(props) {

    let color = props.color ? props.color : 'white'

    let font = props.font ? props.font : 'Standard'

    let ascii;
    figlet.text(props.text, {
        font: font,
    }, function(err, data) {
        ascii = data;
    });

    let menuItems = {
        'name': "Jan",
        'age': "15"
    }

    return (
        <div className={`text-${color}`}>
            <pre>
            <Typewriter
                options={{
                    'skipAddStyles': true,
                    'deleteSpeed': 1,
                    'delay': 1
                }}
                onInit={(typewriter) => {
                    typewriter.changeDelay(1)
                    .typeString(ascii)
                    .start();
                 }}
            />
            </pre>
        </div>
    )
}
