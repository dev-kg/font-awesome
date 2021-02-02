import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M272 80v204.78c0 53.45-36.12 102.08-88.48 112.81C111.54 412.33 48 357.44 48 288V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v200.86c0 83.51 60.89 158.24 144.01 166.35C239.38 456.53 320 381.5 320 288V80c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16z"/>
        </svg>
    )
}

export default Icon
