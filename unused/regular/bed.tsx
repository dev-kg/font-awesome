import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M168 304c48.52 0 88-39.48 88-88s-39.48-88-88-88-88 39.48-88 88 39.48 88 88 88zm0-128c22.06 0 40 17.94 40 40s-17.94 40-40 40-40-17.94-40-40 17.94-40 40-40zm360-48H304c-8.84 0-16 7.16-16 16v192H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-48h544v48c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112zm64 208H336V176h192c35.29 0 64 28.71 64 64v96z"/>
        </svg>
    )
}

export default Icon