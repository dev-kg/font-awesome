import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M431.88 116.13L239.88 4.3a31.478 31.478 0 0 0-31.76 0l-192 111.84C6.15 121.94 0 132.75 0 144.46v223.09c0 11.71 6.15 22.51 16.12 28.32l192 111.83a31.478 31.478 0 0 0 31.76 0l192-111.83c9.97-5.81 16.12-16.62 16.12-28.32V144.46c0-11.71-6.15-22.52-16.12-28.33zM224 32.08l175.75 102.86L224 237.48 47.83 134.7 224 32.08zM32.21 162.65L208 265.18v205.37L32 367.54l.21-204.89zM240 470.84V265.18l175.98-102.64-.21 205.67L240 470.84z"/>
        </svg>
    )
}

export default Icon
