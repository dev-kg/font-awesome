import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zm-96-208l-96 96-96-96h192m-192-32c-28.4 0-42.8 34.5-22.6 54.6l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c20.1-20.1 5.9-54.6-22.6-54.6H128z"/>
        </svg>
    )
}

export default Icon
