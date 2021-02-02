import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M364.3 267.3L259.5 252l-46.9-95.2c-4.2-8.5-12.4-12.8-20.7-12.8-8.2 0-16.3 4.2-20.5 12.8L124.5 252 19.7 267.3C.9 270-6.7 293.2 7 306.5l75.9 74-18 104.6C62.3 500 74.2 512 87.5 512c3.5 0 7.2-.8 10.7-2.7l93.8-49.4 93.8 49.4c3.5 1.8 7.1 2.7 10.6 2.7 13.3 0 25.2-11.9 22.7-26.9l-17.9-104.6 75.9-74c13.6-13.3 6-36.5-12.8-39.2zm-96.7 78.9l-18.1 17.6 4.3 24.9 9.4 54.5-48.9-25.7-22.3-11.8-22.4 11.8-48.9 25.7 9.4-54.5 4.3-24.9-18.1-17.6-39.7-38.7 54.8-8 25-3.6 11.2-22.6 24.4-49.6 24.4 49.6 11.2 22.6 25 3.6 54.8 8-39.8 38.7zM336 160l26.7-53.3L416 80l-53.3-26.7L336 0l-26.7 53.3L256 80l53.3 26.7L336 160zm144 32l-16-32-16 32-32 16 32 16 16 32 16-32 32-16-32-16z"/>
        </svg>
    )
}

export default Icon
