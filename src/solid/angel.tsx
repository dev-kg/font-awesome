import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M208 144c0 44.2 35.8 80 80 80s80-35.8 80-80-35.8-80-80-80-80 35.8-80 80zm-23.5-42.6c4.1-9.9 9.9-18.9 16.6-27.1-5.8-4.1-9.1-7.9-9.1-10.3 0-8 34-32 96-32s96 24 96 32c0 2.3-3.3 6.1-9.1 10.3 6.6 8.3 12.4 17.2 16.6 27.1C406.7 90.9 416 78 416 64c0-35.3-57.3-64-128-64S160 28.7 160 64c0 14 9.3 26.9 24.5 37.4zm387.3 351.7l-38.2-78.6c-6.6-13.5-6.6-29.6 0-43.1 4.8-9.8 8.7-16.7 11.9-22.1C555 292.7 560 282.8 560 256c0-51.1-46.9-96-100.4-96-24.8 0-49 10.3-66.3 28.1l-72.7 73.4c-10.3-3.4-21.2-5.4-32.5-5.4s-22.1 2-32.5 5.4L183 188.2c-17.5-18-41.7-28.2-66.5-28.2C63 160 16 204.9 16 256c0 26.8 5 36.7 14.5 53.2 3.2 5.5 7.1 12.3 11.9 22.1 6.6 13.5 6.6 29.6 0 43.1L4.2 453.1C-2.1 466-1.3 480.9 6.3 493c7.5 11.9 20.2 19 34.2 19h495.1c13.9 0 26.7-7.1 34.2-19 7.5-12.1 8.3-27.1 2-39.9zM195.4 313.2L120 464H52.2l33.4-68.6c13-26.6 13-58.5 0-85.1-5.4-11.2-9.9-18.9-13.5-25.1-7.2-12.4-8.1-14-8.1-29.2 0-24.7 25.5-48 52.4-48 12.1 0 23.5 4.9 32.2 13.9l65.1 65.6c-7.2 7.5-13.5 16.1-18.3 25.7zM456 464l-75.4-150.8c-4.8-9.6-11.1-18.2-18.4-25.7l65.3-65.8c8.6-8.8 20-13.7 32.1-13.7 27 0 52.4 23.3 52.4 48 0 15.2-.9 16.8-8.1 29.2-3.6 6.2-8 14-13.5 25.1-13 26.6-13 58.5 0 85.1l33.4 68.6H456z"/>
        </svg>
    )
}

export default Icon
