import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M575.2 309.9l-5.1-15.2c-2.8-8.4-11.9-12.9-20.2-10.1l-218.3 72.9C314 334.8 286.9 320 256 320c-1.3 0-2.6.3-3.9.4l-94-282.1C150.4 15.4 129 0 105 0H16C7.2 0 0 7.2 0 16v16c0 8.8 7.2 16 16 16h88.9c3.4 0 6.5 2.2 7.6 5.5l93.6 280.8c-27.6 16.9-46.2 47-46.2 81.7 0 53 43 96 96 96s96-43 96-96c0-4.9-.7-9.5-1.4-14.2L565 330.2c8.4-2.8 13-11.9 10.2-20.3zM256 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
        </svg>
    )
}

export default Icon