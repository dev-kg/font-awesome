import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M187.293 260.374C114.743 210.491 115.482 210.366 96 196v-12c0-13.255 10.745-24 24-24h208c13.255 0 24 10.745 24 24v12c-19.497 14.376-18.747 14.494-91.293 64.374-8.414 5.812-25.104 19.79-36.707 19.625-11.6.166-28.296-13.816-36.707-19.625zm91.563 26.355C267.519 294.575 247.377 312.105 224 312c-23.241.104-43.082-17.118-54.849-25.266-45.054-30.977-62.02-42.883-73.151-50.958V328c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24v-92.224c-11.13 8.074-28.094 19.978-73.144 50.953zM448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-48 346V86a6 6 0 0 0-6-6H54a6 6 0 0 0-6 6v340a6 6 0 0 0 6 6h340a6 6 0 0 0 6-6z"/>
        </svg>
    )
}

export default Icon
