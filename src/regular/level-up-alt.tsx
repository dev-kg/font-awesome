import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M296.64 99.674l-96.16-96.16c-4.686-4.687-12.285-4.686-16.97 0L87.353 99.671c-7.536 7.536-2.198 20.484 8.485 20.485l68.162.002V456H64a11.996 11.996 0 0 0-8.485 3.515l-32 32C15.955 499.074 21.309 512 32 512h164c13.255 0 24-10.745 24-24V120.159l68.154.001c10.626 0 16.066-12.906 8.486-20.486z"/>
        </svg>
    )
}

export default Icon
