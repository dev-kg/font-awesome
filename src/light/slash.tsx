import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M637 485.3L23 1.8C19.6-1 14.5-.5 11.8 3l-10 12.5C-1 19-.4 24 3 26.7l614 483.5c3.5 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.3-8.5-1.2-11.2z"/>
        </svg>
    )
}

export default Icon
