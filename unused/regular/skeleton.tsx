import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M496 160H280v-48h152c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H280V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48H80c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h152v48H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h216v48H80c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h152v48H112c-44.18 0-80 35.82-80 80s35.82 80 80 80 80-35.82 80-80c0-11.39-2.46-22.19-6.75-32h141.51c-4.29 9.81-6.75 20.61-6.75 32 0 44.18 35.82 80 80 80s80-35.82 80-80-35.82-80-80-80H280v-48h152c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H280v-48h216c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM144 432c0 17.64-14.36 32-32 32s-32-14.36-32-32 14.36-32 32-32 32 14.36 32 32zm288 0c0 17.64-14.36 32-32 32s-32-14.36-32-32 14.36-32 32-32 32 14.36 32 32z"/>
        </svg>
    )
}

export default Icon