import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 9.6 12.8 28.8 12.8 38.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm25.44-110.41c-.82 8.18-7.7 14.41-15.92 14.41h-19.04c-8.22 0-15.1-6.23-15.92-14.41l-12.8-128c-.94-9.42 6.45-17.59 15.92-17.59h44.64c9.47 0 16.86 8.17 15.92 17.59l-12.8 128z"/>
        </svg>
    )
}

export default Icon
