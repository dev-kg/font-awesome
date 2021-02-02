import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 256c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm80-160h-16V80c0-26.51-21.49-48-48-48H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h352c35.35 0 64-28.65 64-64V144c0-26.51-21.49-48-48-48zm16 320c0 17.64-14.36 32-32 32H96c-35.29 0-64-28.71-64-64V128c0-35.29 28.71-64 64-64h304c8.82 0 16 7.18 16 16v16H112c-8.84 0-16 7.16-16 16s7.16 16 16 16h352c8.82 0 16 7.18 16 16v272z"/>
        </svg>
    )
}

export default Icon
