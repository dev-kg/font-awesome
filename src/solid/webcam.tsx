import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M402.29 438.6l-49.19-30.75c58.11-40.46 96.23-107.66 96.23-183.85 0-123.71-100.29-224-224-224s-224 100.29-224 224c0 76.19 38.12 143.39 96.23 183.85L48.37 438.6a32 32 0 0 0-15 27.14V480a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-14.26a32 32 0 0 0-15.08-27.14zm-177-54.6a160 160 0 1 1 160-160 160 160 0 0 1-159.96 160zm0-288a128 128 0 1 0 128 128A128 128 0 0 0 225.33 96zm0 80a48.05 48.05 0 0 0-48 48 16 16 0 0 1-32 0 80.09 80.09 0 0 1 80-80 16 16 0 1 1 0 32z"/>
        </svg>
    )
}

export default Icon
