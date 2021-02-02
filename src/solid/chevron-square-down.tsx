import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM240.971 361.941l135.515-135.515c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L224 277.088 122.427 175.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.373-9.373 24.569 0 33.941L207.03 361.942c9.372 9.372 24.568 9.372 33.941-.001z"/>
        </svg>
    )
}

export default Icon
