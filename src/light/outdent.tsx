import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M100.69 363.29a15.63 15.63 0 0 0 11.17 4.7A16 16 0 0 0 128 352V160a16 16 0 0 0-16.13-16 15.66 15.66 0 0 0-11.18 4.7l-96 96a16 16 0 0 0 0 22.62zM96 198.64v114.72L38.63 256zM440 48H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm0 384H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-128H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
