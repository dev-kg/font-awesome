import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M123.5 191.5l-16.8-84.8 84.8 16.8c6.4 1.2 12.7-1.2 16.4-6.8L256 44.8l48.1 71.9c3.8 5.6 10.6 8.3 17.2 6.6l85.7-21.5c2.9-.7 5.4-2.2 7.4-4.2 3.8-3.8 5.6-9.5 4.2-15.2-2.1-8.6-10.8-13.8-19.4-11.6l-74.8 18.7-55.1-82.4c-3-4.4-7.9-7.1-13.3-7.1-5.3 0-10.3 2.5-13.3 7.1L187.3 90 89.6 70.6h-.1c-1-.2-2 0-3 0-1.1 0-2.1-.2-3.2 0-2.1.4-4.1 1.3-5.8 2.4-.5.3-.8.9-1.3 1.3-1.1.9-2.2 1.9-3.1 3.1-1.2 1.7-2 3.7-2.4 5.8-.2 1.1 0 2.1 0 3.1s-.2 2.1 0 3.1v.1L90 187.3 7.1 242.7c-4.5 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l82.4 55.1-18.7 74.8c-2.2 8.6 3 17.3 11.6 19.4 5.7 1.4 11.4-.4 15.2-4.2 2-2 3.5-4.5 4.2-7.4l21.5-85.7c1.7-6.6-1-13.4-6.6-17.2L44.8 256l71.9-48.1c5.5-3.6 8-10.1 6.8-16.4zm183.4 2.8c3.3 2.7 8 2.8 11-.3l11.3-11.3c3.2-3.2 3.2-8.6-.2-11.6-43.9-37.9-110.6-36-152.2 5.7-41.7 41.7-43.6 108.3-5.7 152.2 3 3.5 8.4 3.5 11.6.2l11.3-11.3c3-3 3-7.7.3-11-26-31.4-24.3-78.1 5.1-107.5 29.4-29.4 76.2-31 107.5-5.1zm183.8 275c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.5 21.3 21.3 21.3s21.3-9.6 21.3-21.3c0-11.7-9.6-21.3-21.3-21.3zm0-170.6c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.5 21.3 21.3 21.3S512 331.7 512 320c0-11.8-9.6-21.3-21.3-21.3zm0-128c11.8 0 21.3-9.6 21.3-21.3 0-11.8-9.6-21.3-21.3-21.3-11.8 0-21.3 9.6-21.3 21.3-.1 11.7 9.5 21.3 21.3 21.3zM149.3 469.3c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3 11.8 0 21.3-9.6 21.3-21.3.1-11.7-9.5-21.3-21.3-21.3zm85.4-85.3c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.5 21.3 21.3 21.3S256 417 256 405.3c0-11.7-9.6-21.3-21.3-21.3zm85.3-85.3c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3s21.3-9.6 21.3-21.3c0-11.8-9.5-21.3-21.3-21.3zm85.3-85.4c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3 11.8 0 21.3-9.6 21.3-21.3.1-11.7-9.5-21.3-21.3-21.3zm-85.3 256c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3s21.3-9.6 21.3-21.3c0-11.7-9.5-21.3-21.3-21.3zm85.3-85.3c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3 11.8 0 21.3-9.6 21.3-21.3.1-11.7-9.5-21.3-21.3-21.3z"/>
        </svg>
    )
}

export default Icon
