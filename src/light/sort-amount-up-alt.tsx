import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M264 224h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H264a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm0 96h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H264a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm0-192h48a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm240 256H264a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM120.44 35.51a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17l5.61 5.68a11.93 11.93 0 0 0 16.91.09l54-52.74V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17z"/>
        </svg>
    )
}

export default Icon
