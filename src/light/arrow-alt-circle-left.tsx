import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm32-88v-64h104c13.2 0 24-10.8 24-24v-80c0-13.2-10.8-24-24-24H288v-64c0-28.4-34.5-42.8-54.6-22.6l-128 128c-12.5 12.5-12.5 32.8 0 45.3l128 128c20.1 20 54.6 5.8 54.6-22.7zM128 256l128-128v96h128v64H256v96L128 256z"/>
        </svg>
    )
}

export default Icon
