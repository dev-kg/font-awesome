import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M208 112c-52.94 0-96 43.06-96 96s43.06 96 96 96 96-43.06 96-96-43.06-96-96-96zm0 144c-26.47 0-48-21.53-48-48s21.53-48 48-48 48 21.53 48 48-21.53 48-48 48zm256 32c-26.51 0-48 21.49-48 48 0 16.43 8.27 30.89 20.86 39.55C430.78 389.9 416.55 400 400 400h-48v-42.26c39.36-37.87 64-90.94 64-149.74C416 93.31 322.69 0 208 0S0 93.31 0 208c0 58.8 24.64 111.88 64 149.74V480c0 17.67 14.33 32 32 32h224c17.67 0 32-14.33 32-32v-32h48c42.2 0 77.48-29.87 85.98-69.56 15.39-8 26.02-23.9 26.02-42.44 0-26.51-21.49-48-48-48zM304 464H112v-71.67c28.75 15.04 61.37 23.67 96 23.67s67.25-8.63 96-23.67V464zm-96-96c-88.22 0-160-71.78-160-160S119.78 48 208 48s160 71.78 160 160-71.78 160-160 160z"/>
        </svg>
    )
}

export default Icon