import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M372 480H12c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12zm-218.9-96h77.7c8.8 0 16-7.2 16-16V224h93.9c7.1 0 10.7-8.6 5.7-13.6L203.3 66.8c-6.3-6.3-16.4-6.3-22.7 0l-143 143.6c-5 5-1.5 13.6 5.7 13.6h93.9v144c-.1 8.8 7.1 16 15.9 16m0 32c-26.5 0-48-21.5-48-48V256H43.3c-35.6 0-53.4-43.1-28.3-68.2L158 44.2c18.8-18.8 49.2-18.8 68 0l143.1 143.5c25.2 25.2 7.2 68.2-28.3 68.2h-61.9v112c0 26.5-21.5 48-48 48h-77.8v.1z"/>
        </svg>
    )
}

export default Icon
