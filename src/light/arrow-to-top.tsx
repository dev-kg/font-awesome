import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M35.5 248l148-148.5c4.7-4.7 12.3-4.7 17 0l148 148.5c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L209 156.1V468c0 6.6-5.4 12-12 12h-10c-6.6 0-12-5.4-12-12V156.1L59.6 272c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.6-4.7-12.2 0-16.9zM0 44v8c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H12C5.4 32 0 37.4 0 44z"/>
        </svg>
    )
}

export default Icon
