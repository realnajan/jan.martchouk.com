import React from 'react'
import AsciiWriter from '../Components/AsciiWriter'
import aalib from "aalib.js";
const profilepic = require('../Images/pic.jpg')

export default function About() {

    let show;

    let imgdiv = <div id="imgdiv" className={`hide overflow-hidden font-code ml-3 mb-3 aa-image w-64 h-64 text-white ${show}`}></div>

    aalib.read.image.fromURL(profilepic)
    .map(aalib.aa({ width: 100, height: 40, colored: true }))
    .map(aalib.render.html({ fontSize: 4, fontFamily: "fira code", background: "transparent" }))
    .do(function (el) {
        document.getElementById('imgdiv').appendChild(el);
    })
    .subscribe();

    return (

        <div className="text-white">
            <AsciiWriter text="about" font="small"></AsciiWriter>
            {imgdiv}
            <ul id='list' className="hide text-xl font-code ml-3">
                <li>jan</li>
                <li>15 years</li>
                <li>germany</li>
            </ul>
        </div>
    )
}
