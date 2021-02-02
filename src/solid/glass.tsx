import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M354 0H34A32 32 0 0 0 2.06 34l32 448A32 32 0 0 0 66 512h256a32 32 0 0 0 31.94-30l32-448A32 32 0 0 0 354 0zm-34.37 64l-6.86 96H75.22l-6.86-96z"/>
        </svg>
    )
}

export default Icon
