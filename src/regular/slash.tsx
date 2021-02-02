import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M604 508.49L6.01 40.98c-6.9-5.52-8.02-15.59-2.49-22.49L13.51 6C19.03-.9 29.1-2.01 36 3.51l598 467.51c6.9 5.52 8.02 15.59 2.49 22.49l-10 12.49c-5.52 6.9-15.59 8.01-22.49 2.49z"/>
        </svg>
    )
}

export default Icon
