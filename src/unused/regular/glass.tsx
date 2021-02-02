import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 0H32A32 32 0 0 0 .06 34l32 448A32 32 0 0 0 64 512h256a32 32 0 0 0 31.94-30l32-448A32 32 0 0 0 352 0zm-17.19 48l-8 112H57.18l-8-112zM305.1 464H78.9L60.61 208h262.77z"/>
        </svg>
    )
}

export default Icon
